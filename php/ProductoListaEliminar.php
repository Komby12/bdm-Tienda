<?php
session_start();
    include_once '../utilidades/DB.php';

    $ID_Lis = $_SESSION['Lista'];
    $ID_Pro = $_POST['ID_Producto'];
    //$ID_Usu = $_SESSION['ID_Usuario'];

    eliminarProducto($ID_Lis, $ID_Pro);

        function eliminarProducto($ID_Lista, $ID_Producto){
            $DB = new DB();
            $q = "CALL sp_ProductolistaDelete('$ID_Lista', '$ID_Producto');";
            $query =  $DB->conectar()->query($q);
        }
?>