$(document).ready(function(){


$("#telefono").hover( function () {
    $("#telephone").fadeIn("slow");
    }, function(){
    $("#telephone").fadeOut("slow");
    });

$("#fancy-promo").fancybox();


/*VALIDAR FORMULARIO*/    
    $("#formulario").validate({
        submitHandler: function(form) {
            $.ajax({
            type: 'POST',
            url: "send_mail.php",
            data: $("#formulario").serialize(),
            // Mostramos un mensaje con la respuesta de PHP
        success: function(data) {
                $("#formulario").each(function(){
                    this.reset();
                });
                $("#fancy-promo").trigger("click");
            }
            })
                return false;
        }
        
    });

    
});
