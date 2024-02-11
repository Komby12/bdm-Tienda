<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];
    $Usu = $_POST['Usuario'];
    $Con = $_POST['Contrasena'];
    $Img = $_POST['Imagen'];
    $Nom = $_POST['Nombre'];

    $response = array();

    crearUsuarios($ID_Usu, $Usu, $Nom, $Con, $Img);

        function crearUsuarios($ID_Usuario, $Usuario, $Nombre, $Contrasena, $Imagen){
            $DB = new DB();
            $q = "CALL sp_UsuarioUpdate('$ID_Usuario', '$Usuario', '$Nombre', '$Contrasena', '$Imagen');";
            $query =  $DB->conectar()->query($q);
            //$response["message"] = "El Usuario se registró satisfactoriamente.";
            //header("Content-Type: application/json");
            //echo json_encode($response);
        }
?>