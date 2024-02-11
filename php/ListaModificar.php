<?php
session_start();
    include_once '../utilidades/DB.php';

    //$ID_Usu = $_SESSION['ID_Usuario'];
    $ID_Lis = $_POST['ID_Lista'];
    $Nom = $_POST['Nombre'];
    $Des = $_POST['Descripcion'];
    $Pub = $_POST['Publica'];

    modificarLista($ID_Lis, $Nom, $Des, $Pub);

        function modificarLista($ID_Lista, $Nombre, $Descripcion, $Publica){
            $DB = new DB();
            $q = "CALL sp_ListaUpdate('$ID_Lista', '$Nombre', '$Descripcion', '$Publica');";
            $query =  $DB->conectar()->query($q);
        }
?>