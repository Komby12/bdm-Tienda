<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Lis = $_POST['ID_Lista'];
    $ID_Pro = $_POST['ID_Producto'];

    sacarLista($ID_Lis, $ID_Pro);

        function sacarLista($ID_Lista, $ID_Producto){
            $DB = new DB();
            $q = "CALL sp_ProductolistaDelete('$ID_Lista', '$ID_Producto');";
            $query =  $DB->conectar()->query($q);
        }
?>