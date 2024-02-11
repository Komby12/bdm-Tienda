<?php
session_start();
    include_once '../utilidades/DB.php';

    //$ID_Pro = $_SESSION['Producto'];
    //$ID_Usu = $_SESSION['ID_Usuario'];
    $ID_Pro = $_POST['Producto'];
    $Nom = $_POST['Nombre'];
    $Des = $_POST['Descripcion'];
    $Pre = $_POST['Precio'];
    $Exi = $_POST['Existencia'];
    $Cot = $_POST['Cotizacion'];
    $ID_Cat = $_POST['ID_Categoria'];

    modificarProducto($ID_Pro, $Nom, $Des, $Pre, $Exi, $Cot ,$ID_Cat);

        function modificarProducto($ID_Producto, $Nombre, $Descripcion, $Precio, $Existencia, $Cotizacion, $ID_Categoria){
            $DB = new DB();
            $q = "CALL sp_ProductoUpdate('$Nombre', '$Descripcion', '$Precio', '$Existencia', '$Cotizacion', '$ID_Categoria', '$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
        }
?>