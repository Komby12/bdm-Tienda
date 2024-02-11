<?php
session_start();
    include_once '../utilidades/DB.php';

    $ID_Pro = $_SESSION['Producto'];
    $ID_Usu = $_SESSION['ID_Usuario'];
    $Cal = $_POST['Calificacion'];
    $Com = $_POST['Comentario'];

    crearCalificacion($ID_Pro, $ID_Usu, $Cal, $Com);

        function crearCalificacion($ID_Producto, $ID_Usuario, $Calificacion, $Comentario){
            $DB = new DB();
            $q = "CALL sp_CalificacionInsert('$ID_Producto', '$ID_Usuario', '$Calificacion', '$Comentario');";
            $query =  $DB->conectar()->query($q);
        }
?>