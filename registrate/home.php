<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html ><!--<![endif]-->
<!-- the "no-js" class is for Modernizr. -->
    <head data-template-set="html5-reset">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Registrate en nuestras clases muestra</title>
        <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="../css/fancybox.css">
        <link rel="stylesheet" href="../css/custom-theme/jquery-ui-1.10.3.custom.css">

        <script type="text/javascript" src="../js/jquery.js"></script>
        <script type="text/javascript" src="../js/modernizr.js"></script>
        <script type="text/javascript" src="../js/validate.js"></script>
        <script type="text/javascript" src="../js/jquery-ui-1.10.3.custom.js"></script>
        <script type="text/javascript" src="../js/jquery-ui-timepicker-addon.js"></script>
        <script type="text/javascript" src="../js/fancybox.js"></script>
        <script type="text/javascript" src="../js/main.js"></script>
    </head>

    <body>
<style>
#ui-datepicker-div{
padding:15px}
.fancybox-close{display:none;}
</style>
<div id="fb-root"></div>
<script>
window.fbAsyncInit = function() {
    FB.init({ appId: '670522276310483', 
    status: true, 
    cookie: true,
    xfbml: true,
    oauth: true
});
	FB.Canvas.setAutoGrow();
};
  // Load the SDK asynchronously
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/es_LA/all.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  
  	function sendRequestViaMultiFriendSelector() {
FB.ui({
  method: 'feed',
  link: 'https://www.facebook.com/MobiusCrossfit/app_670522276310483',
  picture: 'http://punkmkt.com/fanpage/mobius/registrate/logo.jpg',
  name: 'Mobius CrossFit',
  caption: '	Yo ya le perdí el miedo a CrossFit ¿Y tú?',
  description: 'Toma 3 clases muestra.'
}, function(response){
  
$.fancybox.close()
});

	}

</script>        
        <div id="wrapper" class="clearfix">
            <a id="fancy_intro_click" href="#PopUp"></a>
	    
            <form id="form" action="" method="POST">
                <div class="divinputs">
                    <input class="required inputbox" placeholder="NOMBRE Y APELLIDO*" type="text" name="nombre">
                </div>
                <div class="divinputs">
                    <input class="required inputbox email" placeholder="MAIL*" type="text" name="correo">                    
                </div>
                <div class="divinputs clearfix">
                    <input id="datepicker" class="required inputbox" placeholder="INICIA EL DÍA*" type="text" name="inicio">                    
                    <!--<input id="horario" class="required inputbox" placeholder="HORA*" type="text" name="hora">--> 
                    <select id="horario" class="required inputbox" name="hora">
                        <option value="7:00">7:15</option>
                        <option value="7:00">17:00</option>
                        <option value="21:00">21:00</option>
                    </select>
                </div>
                <div class="divinputs" style="text-align: center;">
                    <input id="enviar" type="image" value="" src="../images/sen-button.png">
                </div>
            </form>
        </div>
	<div style="display:none">
	   <div id="PopUp" style="width:566px;height:371px;background-image:url('pop-up.png')"><p style="float: left;width: 100%;text-align: center;margin-top: 309px;"><a onclick="sendRequestViaMultiFriendSelector(); return false;" style="cursor:pointer"><img src="share-close.png"></a></p></div>
	</div>

    </body>
</html>
