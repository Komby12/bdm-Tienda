<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];
    getCategoria($ID_Usu);

        function getCategoria($ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_CategoriaUsuario('$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Categoria'] = $ObjetoLista['ID_Categoria'];
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $lista[$numero]['Descripcion'] = $ObjetoLista['Descripcion'];
                //$lista[$numero]['ID_Usuario'] = $ObjetoLista['ID_Usuario'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>