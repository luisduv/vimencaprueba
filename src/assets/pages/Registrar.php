<?php 

$id = isset($_POST['id']) ? $_POST['id'] : '';
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$apellido = isset($_POST['apellido']) ? $_POST['apellido'] : '';
$segundoApellido = isset($_POST['segundoApellido']) ? $_POST['segundoApellido'] : '';
$tipoIdentificacion = isset($_POST['tipoIdentificacion']) ? $_POST['tipoIdentificacion'] : '';
$numeroIdentificacion = isset($_POST['numeroIdentificacion']) ? $_POST['numeroIdentificacion'] : '';
$fecha = isset($_POST['fecha']) ? $_POST['fecha'] : '';


try{

    $conexion = new PDO('mysql:host=localhost;port=3306;dbname=vimencaprueba','root','');
    $conexion->set_Attribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->set_Attribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);


} catch (PDOException $error) {
    echo $error->getMessage();
    die();


}