<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];
    $Producto = $_SESSION['Producto'];
    $Cantidad = $_POST['Cantidad'];

    agregarCarrito($ID_Usu, $Producto, $Cantidad);

        function agregarCarrito($ID_Usuario, $ID_Producto, $Cantidad){
            $DB = new DB();
            $q = "CALL sp_CarritoInsert('$ID_Usuario', '$ID_Producto', '$Cantidad');";
            $query =  $DB->conectar()->query($q);
        }
?>