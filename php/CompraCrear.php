<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];

    crearCompra($ID_Usu);

        function crearCompra($ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_CompraInsert('$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
        }
?>