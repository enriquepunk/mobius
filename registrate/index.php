<?php
 require '../../php-sdk/facebook.php';
$facebook = new Facebook(array(
  'appId'  => '670522276310483',
  'secret' => '5be203cb5396ab4d14b25d9fe246cd66',
  'cookie' => true
));
$signed_request = $facebook->getSignedRequest();
$like_status = $signed_request["page"]["liked"];
if ($like_status) { ?>
  <!DOCTYPE html>
  <html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Registrate en nuestras clases muestra</title>
    <script type="text/javascript">
    <!--
      window.location = "home.php"
    //-->
</script>
  </head>
  <body>
  
  </body>
  </html>
<?php }
else {
    ?>
    <!DOCTYPE html>
    <html>
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="//normalize-css.googlecode.com/svn/trunk/normalize.css" />
        <title>Registrate en nuestras clases muestra</title>
        </head>
        <body style="width:810px; margin:0 auto;text-align: center;">
            <div id="fb-root"></div>
              <script>
                window.fbAsyncInit = function() {
                  FB.init();
                  FB.Canvas.setAutoGrow();
                };
                (function() {
               var e = document.createElement('script'); e.async = true;
               e.src = document.location.protocol + '//connect.facebook.net/es_ES/all.js';
               document.getElementById('fb-root').appendChild(e);
                }());
               </script>
            <img src="cortinilla.png" alt="mobius - Cancún">
        </body>
    </html>
    <?php
}
 ?>