<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Com = $_POST['ID_Compra'];

    obtenerNumeroFactura($ID_Com);

        function obtenerNumeroFactura($ID_Compra){
            $DB = new DB();
            $q = "SELECT calcularTotalFactura($ID_Compra)";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['total'] = $ObjetoLista[0];
                $numero++;
            }
            echo json_encode($lista);
        }
?>