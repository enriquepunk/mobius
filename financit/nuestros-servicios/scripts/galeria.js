// JavaScript Document
$(document).ready(function(){
	var first = $('.contenido-carousel>li>a:first').clone();
	var titulo =  $('.contenido-carousel>li>a:first').parent().children("h2").clone();
	var descripcion = $('.contenido-carousel>li>a:first').parent().children("p").clone();
	//alert (titulo.text());
	titulo.appendTo(".galeria-bottom");
	descripcion.appendTo(".galeria-bottom");
	if( $('.contenido-carousel>li>a:first').parent().children("div").length > 0){
				 $('.contenido-carousel>li>a:first').parent().children("div").appendTo(".galeria-bottom");
	}
	$(".imagen-grande>img").attr("src",first.attr("href"));
	$(".imagen-grande>img").attr("alt",first.attr("title"));
	$(".imagen-grande>img").attr("title",first.attr("title"));
	$("#titulo-imagen > p").text(first.attr("title"));
	$('#btn-left').click(function() {
	//var desplazamiento = 75;//numero de pixeles que se desplaza la barra de imagenes al hacer click en los botones de desplazamiento
		if (parseInt($(".contenido-carousel").css("margin-left").replace("px", "")) < 0 )
		{
			$('#btn-left').attr("id","no-action-btn");
			$('.contenido-carousel').animate({marginLeft: "+=188px"}, 1000,function(){
				$("#no-action-btn").attr("id","btn-left");	
			});
		}
	});
	$('#btn-right').click(function() {
		//alert($(".contenido-carousel").css("margin-left").replace("px", ""));
		if (parseInt($(".contenido-carousel").css("margin-left").replace("px", "")) > -1*((($(".contenido-carousel li").length) - 3) * 70) )
		{
			$('#btn-right').attr("id","no-action-btn");
			$('.contenido-carousel').animate({marginLeft: "-=188px"}, 1000,function(){
				$("#no-action-btn").attr("id","btn-right");	
			});
		}
	});
	$('.contenido-carousel>li>a').click(function(event) {
		var me = $(this).clone();
		event.preventDefault();
		$(".imagen-grande").fadeOut("slow",function(){
			$("#titulo-imagen > p").text(me.attr("title"));
			$(".imagen-grande>img").attr("src",me.attr("href"));
			$(".imagen-grande>img").attr("alt",me.attr("title"));
			$(".imagen-grande>img").attr("title",me.attr("title"));
			$(".imagen-grande").fadeIn("slow");	 
		});
			 //alert($(this).attr("href"));
	});
	$("#mostrar-pop-up").click(function(){
		$("#pop-up").show();
		//alert("O:");
	});
	$("#cerrar-pop-up").click(function(){
		$("#pop-up").hide(	);
	});
	$('.contenido-carousel li a').each(function(){
		$.preloadImages( $(this).attr("href"));
	});
});