<?php
session_start();
    include_once '../utilidades/DB.php';

    $ID_Usu = $_SESSION['ID_Usuario'];
    $Nom = $_POST['Nombre'];
    $Des = $_POST['Descripcion'];
    $Pub = $_POST['Publica'];

    crearLista($Nom, $Des, $Pub, $ID_Usu);

        function crearLista($Nombre, $Descripcion, $Publica, $ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_ListaInsert('$Nombre', '$Descripcion', '$Publica', '$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
        }
?>