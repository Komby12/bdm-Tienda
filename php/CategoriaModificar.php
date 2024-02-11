<?php
session_start();
    include_once '../utilidades/DB.php';

    //$ID_Usu = $_SESSION['ID_Usuario'];
    $ID_Cat = $_POST['ID_Categoria'];
    $Nom = $_POST['Nombre'];
    $Des = $_POST['Descripcion'];

    crearCategoria($ID_Cat, $Nom, $Des);

        function crearCategoria($ID_Categoria, $Nombre, $Descripcion){
            $DB = new DB();
            $q = "CALL sp_CategoriaUpdate('$ID_Categoria', '$Nombre', '$Descripcion');";
            $query =  $DB->conectar()->query($q);
        }
?>