<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $Usu = $_SESSION['ID_Usuario'];
    getCarrito($Usu);

        function getCarrito($Usuario){
            $DB = new DB();
            $q = "CALL sp_CarritoSelect('$Usuario');";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Producto'] = $ObjetoLista['ID_Producto'];
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $lista[$numero]['Precio'] = $ObjetoLista['Precio'];
                $lista[$numero]['Cantidad'] = $ObjetoLista['Cantidad'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>