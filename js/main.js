$(document).ready(function(){

$( "#datepicker" ).datepicker({
        defaultDate: "+1w",
        minDate:+0,
        dateFormat: "dd/mm/yy",
        numberOfMonths: 1
    });
//    $('#horario').timepicker({
//	hourGrid: 4,
//	minuteGrid: 10,
//	timeFormat: 'hh:mm tt'
//    });
//
$("#fancy_intro_click").fancybox();
//
///*VALIDAR FORMULARIO*/
    $("#form").validate({
        submitHandler: function(form) {
            $.ajax({
            type: 'POST',
            url: "send_mail.php",
            data: $("#form").serialize(),
            // Mostramos un mensaje con la respuesta de PHP
        success: function(data) {
                $("#form").each(function(){
                    this.reset();
                });
                $("#fancy_intro_click").trigger("click");
            }
            })
                return false;
        }

    });
//
//
//    $(".link-compartir").click(function(){
//            FB.ui({method: 'apprequests',
//                message: '#elverdaderosabordelmar'
//            });
//            
//    })

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

