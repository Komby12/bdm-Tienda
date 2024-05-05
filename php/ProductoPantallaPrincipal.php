<?php
session_start();
    include_once '../utilidades/DB.php';
    
    getProducto();

        function getProducto(){
            $DB = new DB();
            $q = "CALL sp_ProductoBusquedaMenu();";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Producto'] = $ObjetoLista['ID_Producto'];
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $lista[$numero]['Precio'] = $ObjetoLista['Precio'];
                $lista[$numero]['Categoria'] = $ObjetoLista['Categoria'];
                $lista[$numero]['Calificacion'] = $ObjetoLista['Calificacion'];
                $lista[$numero]['Vendedor'] = $ObjetoLista['Vendedor'];
                $lista[$numero]['Imagen'] = $ObjetoLista['Imagen'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>