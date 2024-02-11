<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Com = $_POST['ID_Compra'];
    $Dir = $_POST['Direccion'];
    $ID_Met = $_POST['ID_Metodo'];

    crearCompra($ID_Com, $Dir, $ID_Met);

        function crearCompra($ID_Compra, $Direccion, $ID_Metodo){
            $DB = new DB();
            $q = "CALL sp_CompraTerminar('$ID_Compra', '$Direccion', '$ID_Metodo');";
            $query =  $DB->conectar()->query($q);
        }
?>