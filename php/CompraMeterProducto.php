<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Com = $_POST['ID_Compra'];
    $ID_Pro = $_POST['ID_Producto'];
    $Cantidad = $_POST['Cantidad'];
    $Pre = $_POST['Precio'];

    agregarCompra($ID_Com, $ID_Pro, $Cantidad, $Pre);

        function agregarCompra($ID_Compra, $ID_Producto, $Cantidad, $Precio){
            $DB = new DB();
            $q = "CALL sp_ProductoCompraInsert('$ID_Compra', '$ID_Producto', '$Cantidad', '$Precio');";
            $query =  $DB->conectar()->query($q);
        }
?>