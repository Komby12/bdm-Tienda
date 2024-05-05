<?php
session_start();
    include_once '../utilidades/DB.php';
    
    //$Pro = $_POST['Producto'];
    $Pro = $_SESSION['Producto'];
    getProducto($Pro);

        function getProducto($Producto){
            $DB = new DB();
            $q = "CALL sp_ProductoPagina('$Producto');";
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
                $lista[$numero]['Cotizar'] = $ObjetoLista['Cotizar'];
                $lista[$numero]['Usuario'] = $ObjetoLista['Usuario'];
                $lista[$numero]['Imagen'] = $ObjetoLista['Imagen'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>