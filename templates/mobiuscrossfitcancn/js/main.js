$(document).ready(function(){

    pic= new Image();
    pic1= new Image();
    pic2= new Image();
    pic3= new Image();
    pic4= new Image();
    pic5= new Image();
    pic6= new Image();
    pic5= new Image();
    pic7= new Image();
    pic8= new Image();
    pic9= new Image();
    pic10= new Image();
    pic11= new Image();
    pic12= new Image();
    pic13= new Image();
    pic14= new Image();
    pic15= new Image();
    pic16= new Image();
    pic17= new Image();
    pic18= new Image();
    pic19= new Image();
    pic20= new Image();
    pic21= new Image();
    pic22= new Image();
    pic23= new Image();
    pic24= new Image();
    pic25= new Image();
    pic26= new Image();
    pic27= new Image();
    pic28= new Image();
    pic29= new Image();
    pic30= new Image();
    
    pic.src="templates/mobiuscrossfitcancn/images/webcuts/bg.jpg";
    pic1.src="templates/mobiuscrossfitcancn/images/webcuts/logo.png";
    pic2.src="templates/mobiuscrossfitcancn/images/webcuts/popup/boton.png";
    pic3.src="templates/mobiuscrossfitcancn/images/webcuts/twitter-icon.png";
    pic4.src="templates/mobiuscrossfitcancn/images/webcuts/facebook-icon.png";
    pic5.src="templates/mobiuscrossfitcancn/images/webcuts/instagram.png";
    pic6.src="templates/mobiuscrossfitcancn/images/webcuts/mail-icon.png";
    pic7.src="templates/mobiuscrossfitcancn/images/webcuts/pin.png";
    pic8.src="images/icethumbs/920x275/95/images//sampledata//iceslideshow//image2.jpg";
    pic9.src="images/icethumbs/920x275/95/images//sampledata//iceslideshow//image1.jpg";
    pic10.src="images/icethumbs/920x275/95/images//sampledata//iceslideshow//image3.jpg";
    pic11.src="images/icethumbs/920x275/95/images//sampledata//iceslideshow//image4.jpg";
    pic12.src="templates/mobiuscrossfitcancn/images/webcuts/ubicacion.png";
    pic13.src="images/strenght-workout-banner.jpg";
    pic14.src="images/coach1.jpg";
    pic15.src="images/coach2.jpg";
    pic16.src="images/coach3.jpg";
    pic17.src="images/coach4.jpg";
    pic18.src="images/horario-mobius_b.png";
    pic19.src="templates/mobiuscrossfitcancn/images/webcuts/galeria.jpg";
    pic20.src="images/banner-coaches.jpg";
    pic21.src="images/ubicanos-banner.jpg";
    pic22.src="images/formulario-bloqueado.jpg";
    pic23.src="images/imagen-primera-edicion.png";
    pic24.src="images/imagen-segunda-edicion.png";
    pic25.src="images/banners/imagen-clases.png";
    pic26.src="templates/mobiuscrossfitcancn/images/webcuts/arteOpen-pop-up.png";
    pic27.src="templates/mobiuscrossfitcancn/images/webcuts/popup/header.png";
    pic28.src="templates/mobiuscrossfitcancn/images/webcuts/popup/texto-horarios.png";
    pic29.src="templates/mobiuscrossfitcancn/images/webcuts/popup/boton-horarios.png";
    pic30.src="templates/mobiuscrossfitcancn/images/webcuts/popup/formulariopreciosbg.png";
    
    

    $("#menu_principal ul li a").click( function () {
        var des=$(this).attr("href");
        $("#menu_principal ul li a").removeClass("selected");
        $(this).addClass("selected");
    });

//    $(".item-106").addClass('dropdown');
//    $(".item-106 .nav-child").addClass('');

    $(".item-106").hover(function(){
    $("ul.nav-child").css("height","auto");
    $("ul.nav-child").stop().slideDown("slow");
    $(".menu ul li a").addClass("hover")
    },function(){
    $("ul.nav-child").stop().slideUp("slow");
    })

//    $("#qes").click(function(){
//        $(".mitos").animate({
//        width: "0",
//        marginLeft: "0"
//        }, 1000);
//        $(".conoce-mobius").animate({
//        width: "0",
//        marginLeft: "0"
//        }, 1000);
//        $('.plus').hide();
//        $("#titulo").animate({
//        width: "230px",
//        marginLeft: "0"
//        }, 1000);
//        $("#contenido_que_es").show('slow');
//        $('.quescrossfit #titulo').addClass('span3');
//        $(".quescrossfit").animate({
//        width: "100%",
//        marginLeft: "0"
//        }, 1000);
//        $('#qesback').show();
//    });
//    
//    $("#qesback").click(function(){
//        $(".mitos").animate({
//        width: "370px",
//        marginLeft: "30px"
//        }, 1000);
//        $(".conoce-mobius").animate({
//        width: "370px",
//        marginLeft: "30px"
//        }, 1000);
//        $('.less').hide();
//        $(".quescrossfit #titulo").removeClass('span3');
//        $("#titulo").animate({
//        //width: "370px",
//        marginLeft: "0"
//        }, 1000);
//        $("#contenido_que_es").hide();
//        $(".quescrossfit").animate({
//        width: "370px",
//        marginLeft: "0"
//        }, 1000);
//        $('.plus').show();
//    });
//    
//    $("#mits").click(function(){
//        $(".quescrossfit").animate({
//        width: "0",
//        marginLeft: "0"
//        }, 1000);
//        $(".conoce-mobius").animate({
//        width: "0",
//        marginLeft: "0"
//        }, 1000);
//        $('.plus').hide();
//        $("#titulo2").animate({
//        width: "230px",
//        marginLeft: "0"
//        }, 1000);
//        $("#contenido_mitos").show();
//        $(".mitos").animate({
//        width: "100%",
//        marginLeft: "0"
//        }, 1000);
//        $('#mitsback').show();
//    });
//    
//    $("#mitsback").click(function(){
//        $(".mitos").animate({
//            width: "323.33",
//            marginLeft: "0"
//        }, 1000);
//        $(".conoce-mobius").animate({
//        width: "323.33",
//        marginLeft: "0"
//        }, 1000);
//        $("#titulo2").animate({
//            width: "323.23px",
//            marginLeft: "0"
//        }, 1000);
//        $('.less').hide();
//        $('.plus').fadeIn('slow');
//        $(".quescrossfit").animate({
//            width: "323.33",
//            marginLeft: "0"
//        }, 1000);
//    });
//    
//
//    $("#meetmobius").click(function(){
//        $(".mitos").animate({
//        width: "0",
//        marginLeft: "0"
//        }, 1000);
//        $(".quescrossfit").animate({
//        width: "0",
//        marginLeft: "0"
//        }, 1000);
//        $('.plus').hide();
//        $("#titulo3").animate({
//        width: "230px",
//        marginLeft: "0"
//        }, 1000);
//        $("#contenido_conoce_mobius").show();
//        $(".conoce-mobius").animate({
//        width: "100%",
//        marginLeft: "0"
//        }, 1000);
//        $('#meetmobiusback').show();
//    });
//
//    $("#meetmobiusback").click(function(){
//        $(".mitos").animate({
//        width: "323.33px",
//        marginLeft: "0"
//        }, 1000);
//        $(".conoce-mobius").animate({
//        width: "323.33px",
//        marginLeft: "0"
//        }, 1000);
//        $('.less').hide();
//        $("#titulo3").animate({
//        width: "323.33px",
//        marginLeft: "0"
//        }, 1000);
//        $("#contenido_conoce_mobius").hide();
//        $(".quescrossfit").animate({
//        width: "323.33px",
//        marginLeft: "0"
//        }, 1000);
//        $('.plus').show();
//    });

        /*VALIDAR FORMULARIO dropins*/
       $("#contact_form_dropins").validate({
           submitHandler: function(form) {
               $.ajax({
                   type: 'POST',
                   url: "templates/mobiuscrossfitcancn/send_mail_popup.php",
                   data: $("#contact_form_dropins").serialize(),
                   // Mostramos un mensaje con la respuesta de PHP
                   success: function(data) {
                       $("#contact_form_dropins").each(function(){
                       this.reset();
                       });
                       }
                   })
                   return false;
               }
       }); 

        /*VALIDAR FORMULARIO*/
        $("#form_mobius").validate({
            submitHandler: function(form) {
                $.ajax({
                    type: 'POST',
                    url: "templates/mobiuscrossfitcancn/enviar_datos.php",
                    data: $("#form_mobius").serialize(),
                    // Mostramos un mensaje con la respuesta de PHP
                    success: function(data) {
                        $("#form_mobius").each(function(){
                        this.reset();
                        });
                        //$("#fancy-promo").trigger("click");
                        alert(data);
                        }
                    })
                    return false;
                }
        }); 

        /*VALIDAR FORMULARIO*/
        $("#form_footer").validate({
            submitHandler: function(form) {
                $.ajax({
                    type: 'POST',
                    url: "templates/mobiuscrossfitcancn/enviar_datos_footer.php",
                    data: $("#form_footer").serialize(),
                    // Mostramos un mensaje con la respuesta de PHP
                    success: function(data) {
                        $("#form_footer").each(function(){
                        this.reset();
                        });
                        alert(data);
                        //$("#fancy-promo").trigger("click");
                        }
                    })
                    return false;
                }
        }); 
    
        $('#mailme').click(function (e){
    //        $(window).scrollTop($('#form_footer').offset().top);
            e.preventDefault();
            scroll_navigation=false;
            var section=$('#form_footer');
            $('html, body').stop(true,true).animate({scrollTop: $(section).offset().top -100 }, 1500,"swing");
            setTimeout(function(){scroll_navigation=true},1500)
       }) ;
     
        $(".trombinoscope_107").cycle({
        fx: "scrollVert"
        ,rev: 1
        ,timeout:0
        ,next: "#next"
        ,prev: "#prev"
        ,height: 335
        ,cleartypeNoBg:true,
        width:"820",
        heigth:"460"
        }) 
        $("#form_make_over").validate({});
        /*VALIDAR FORMULARIO*/
//    $("#form_make_over").validate({
//        submitHandler: function(form) {
//            $.ajax({
//                type: 'POST',
//                url: "/mobius/templates/mobiuscrossfitcancn/enviar_datos_makeover.php",
//                data: $("#form_make_over").serialize(),
//                // Mostramos un mensaje con la respuesta de PHP
//                success: function(data) {
//                    $("#form_make_over").each(function(){
//                    this.reset();
//                    });
//                    alert('Gracias pormandarnos tus datos.');
////                    $("#fancy-promo").trigger("click");
//                    }
//                })
//                return false;
//            }
//    });

        $(".fancy-clase-muestra").fancybox();
        /*VALIDAR FORMULARIO clase muestra*/
        $("#form_clase_muestra").validate({
            submitHandler: function(form) {
                $.ajax({
                    type: 'POST',
                    url: "templates/mobiuscrossfitcancn/enviar_mail_clase_muestra.php",
                    data: $("#form_clase_muestra").serialize(),
                    // Mostramos un mensaje con la respuesta de PHP
                    success: function(data) {
                            $("#form_clase_muestra").each(function(){
                            this.reset();
                            });
                            $(".fancy-clase-muestra").trigger("click");
                        }
                    })
                    return false;
                }
        }); 
    
        $(function() {
            if(!$.support.placeholder) {

                    var active = document.activeElement;

                    $(':text').focus(function () {
                            if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
                                    $(this).val('').removeClass('hasPlaceholder');
                            }

                    }).blur(function () {
                            if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                                    $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
                            }
                    });

                    $(':text').blur();
                    $(active).focus();

                    $('form').submit(function () {
                            $(this).find('.hasPlaceholder').each(function() { $(this).val(''); });
                    });

            }
        });
         
});

