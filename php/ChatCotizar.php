<?php
session_start();
    include_once '../utilidades/DB.php';

    $ID_Usu = $_SESSION['ID_Usuario'];
    $ID_Des = $_POST['ID_Destinatario'];
    $Tex = $_POST['Texto'];
    $ID_Pro = $_POST['ID_Producto'];
    $Can = $_POST['Cantidad'];
    $Pre = $_POST['Precio'];

    crearCalificacion($Tex, $ID_Des, $ID_Usu, $ID_Pro, $Can, $Pre);

        function crearCalificacion($Texto, $ID_Destinatario, $ID_Usuario, $ID_Producto, $Cantidad, $Precio){
            $DB = new DB();
            $q = "CALL sp_ChatCotizar('$Texto', '$ID_Destinatario', '$ID_Usuario', '$ID_Producto', '$Cantidad', '$Precio');";
            $query =  $DB->conectar()->query($q);
        }
?>