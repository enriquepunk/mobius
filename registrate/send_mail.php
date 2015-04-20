<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$inicio = $_POST['inicio'];
$hora = $_POST['hora'];
$subject = 'Contacto desde Mobius - FACEBOOK - TAB - Clases de prueba';
$to = "info@mobiuscrossfitcancun.com,marijo@punkmkt.com";
//$to = "sebas@punkmkt.com";

$headers .= 'Content-Type: text/plain; charset =UTF-8' . "\r\n";
//$to = "seabs@punkmkt.com, jjcasal@cancun.com.mx";
$message ="";
$message .="Nombre: ".$nombre."\n";
$message .="Correo: ".$correo."\n";
$message .="Teléfono: ".$inicio."\n";
$message .="Fecha: ".$hora."\n";
if(mail($to, $subject,$message,$headers)){
echo "mensaje enviado!!";
}
else{
echo "algo anda mal, intentalo mas tarde";
}
?>