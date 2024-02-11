<?php
session_start();
    include_once '../utilidades/DB.php';
    

    $ID_Usu = $_SESSION['ID_Usuario'];

    obtenerNumeroFactura($ID_Usu);

        function obtenerNumeroFactura($ID_Usuario){
            $DB = new DB();
            $q = "SELECT comprareciente($ID_Usuario)";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['compra'] = $ObjetoLista[0];
                $numero++;
            }
            echo json_encode($lista);
        }
?>