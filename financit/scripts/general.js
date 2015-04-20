// JavaScript Document       
    $(document).ready(function() {
		//menu desplegable
		$('.vertical').hide(); 
 	$('#menu-galeria-top').hover(function(){
		
		
			$('.vertical').show(0);
		
	});
	$("#menu-galeria").mouseleave(function(){
			$('.vertical').hide(0);
	});
	//ancho automatico de divs laterales
	var ancho = ($(document).width() - $("#principal").width())/2;
	 //$("body").width((ancho*2) + $("#principal").width());
	 $("#izquierdo").width(ancho);
	   $("#izquierdo").height($("#principal").height());
	   $("#izquierdo").css("background-image","url(http://financitconsultores.com/images/fondo-left.png)");
	   $("#derecho").width(ancho);
	   $("#derecho").height($("#principal").height());
	   $("#derecho").css("background-image","url(http://financitconsultores.com/images/fondo-right.png)");
      $('#showmision').click(function() {
        $('#mision').toggle(400);
        return false;
      });
       $('#showvision').click(function() {
        $('#vision').toggle(400);
        return false;
      });
       $('#showvalores').click(function() {
        $('#valores').toggle(400);
        return false;
      });
      /*$(function() {
		$( "#accordion" ).accordion();
	});*/
	 $.preloadCssImages();
  jQuery.preloadImages = function(){
  for(var i = 0; i<arguments.length; i++){
	  //alert(arguments[i]);
    jQuery("<img>").attr("src", arguments[i]);
  }
}
    });