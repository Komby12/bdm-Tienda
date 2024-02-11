<?php
session_start();
    include_once '../utilidades/DB.php';

    $Usu = $_SESSION['ID_Usuario'];

    getCarritoTotal($Usu);

        function getCarritoTotal($ID_Usuario){
            $DB = new DB();
            $q = "SELECT totalcarrito($ID_Usuario)";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['Total'] = $ObjetoLista[0];
                $numero++;
            }
            echo json_encode($lista);
        }
?>