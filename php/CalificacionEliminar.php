<?php
session_start();
    include_once '../utilidades/DB.php';

    $ID_Pro = $_SESSION['Producto'];
    $ID_Usu = $_SESSION['ID_Usuario'];

    eliminarCalificacion($ID_Pro, $ID_Usu);

        function eliminarCalificacion($ID_Producto, $ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_CalificacionDelete('$ID_Producto', '$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
        }
?>