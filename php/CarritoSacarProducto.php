<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];
    $Producto = $_POST['ID_Producto'];

    deleteCarrito($ID_Usu, $Producto);

        function deleteCarrito($usuario, $producto){
            $DB = new DB();
            $q = "CALL sp_CarritoDelete($usuario, $producto);";
            $query =  $DB->conectar()->query($q);
        }
?>