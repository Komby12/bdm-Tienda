<?php
session_start();
    include_once '../utilidades/DB.php';

    //$ID_Pro = $_SESSION['Producto'];
    $ID_Pro = $_POST['Producto'];
    $ID_Usu = $_SESSION['ID_Usuario'];

    aprobarProducto($ID_Pro, $ID_Usu);

        function aprobarProducto($ID_Producto, $ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_ProductoAprobar('$ID_Producto', '$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
        }
?>