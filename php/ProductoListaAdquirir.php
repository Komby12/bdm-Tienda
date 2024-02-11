<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $Lista = $_SESSION['Lista'];
    //$Lista = 1;
    getProductoLista($Lista);

        function getProductoLista($i){
            $DB = new DB();
            $q = "CALL sp_ProductoListaSelect('$i');";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $lista[$numero]['Precio'] = $ObjetoLista['Precio'];
                $lista[$numero]['ID_Producto'] = $ObjetoLista['ID_Producto'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>