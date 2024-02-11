<?php
session_start();
    include_once '../utilidades/DB.php';

    $ID_Usu = $_SESSION['ID_Usuario'];
    $Nom = $_POST['Nombre'];
    $Des = $_POST['Descripcion'];

    crearCategoria($Nom, $Des, $ID_Usu);

        function crearCategoria($Nombre, $Descripcion, $ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_CategoriaInsert('$Nombre', '$Descripcion', '$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
        }
?>