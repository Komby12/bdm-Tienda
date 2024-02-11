<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];
    getProducto($ID_Usu);

        function getProducto($ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_ProductoUsuario('$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Producto'] = $ObjetoLista['ID_Producto'];
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $lista[$numero]['Descripcion'] = $ObjetoLista['Descripcion'];
                $lista[$numero]['Precio'] = $ObjetoLista['Precio'];
                $lista[$numero]['Existencia'] = $ObjetoLista['Existencia'];
                //$lista[$numero]['ID_Usuario'] = $ObjetoLista['ID_Usuario'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>