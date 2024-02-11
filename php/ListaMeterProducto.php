<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Lis = $_POST['ID_Lista'];
    $ID_Pro = $_SESSION['Producto'];

    agregarLista($ID_Lis, $ID_Pro);

        function agregarLista($ID_Lista, $ID_Producto){
            $DB = new DB();
            $q = "CALL sp_ProductolistaInsert('$ID_Lista', '$ID_Producto');";
            $query =  $DB->conectar()->query($q);
        }
?>