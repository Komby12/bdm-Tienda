<?php
//session_start();
    include_once '../utilidades/DB.php';
    
    $Cor = $_POST['email'];
    $Usu = $_POST['username'];
    $Con = $_POST['password'];
    $Rol = $_POST['role'];
    $Img = $_POST['foto'];
    $Nom = $_POST['name'];
    $Sex = $_POST['gender'];
    $Nac = $_POST['birthdate'];
    $Pri = $_POST['privacy'];

    $response = array();

    crearUsuarios($Usu, $Nom, $Con, $Cor, $Img, $Sex, $Nac, $Rol, $Pri);

        function crearUsuarios($Usur, $Nomb, $Cont, $Corr, $Img, $Sex, $Nac, $Rol, $Pr){
            $DB = new DB();
            $q = "CALL sp_UsuarioInsert('$Usur', '$Nomb', '$Cont', '$Nac', '$Corr', '$Img', '$Sex', '$Pr' ,'$Rol');";
            $query =  $DB->conectar()->query($q);
            //$response["message"] = "El Usuario se registró satisfactoriamente.";
            //header("Content-Type: application/json");
            //echo json_encode($response);
        }
?>