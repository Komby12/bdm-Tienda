<?php
session_start();
    include_once '../utilidades/DB.php';

    //$ID_Pro = $_SESSION['Producto'];
    $ID_Usu = $_SESSION['ID_Usuario'];
    $Nom = $_POST['Nombre'];
    $Des = $_POST['Descripcion'];
    $Pre = $_POST['Precio'];
    $Exi = $_POST['Existencia'];
    $Cot = $_POST['Cotizacion'];
    $ID_Cat = $_POST['ID_Categoria'];

    crearProducto($Nom, $Des, $Pre, $Exi, $Cot ,$ID_Cat, $ID_Usu);

        function crearProducto($Nombre, $Descripcion, $Precio, $Existencia, $Cotizacion, $ID_Categoria, $ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_ProductoInsert('$Nombre', '$Descripcion', '$Precio', '$Existencia', '$Cotizacion', '$ID_Categoria', '$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
        }
?>