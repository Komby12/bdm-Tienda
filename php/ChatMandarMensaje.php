<?php
session_start();
    include_once '../utilidades/DB.php';

    $ID_Usu = $_SESSION['ID_Usuario'];
    $ID_Des = $_POST['ID_Destinatario'];
    $Tex = $_POST['Texto'];

    crearCalificacion($Tex, $ID_Des, $ID_Usu);

        function crearCalificacion($Texto, $ID_Destinatario, $ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_ChatInsertar('$Texto', '$ID_Destinatario', '$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
        }
?>