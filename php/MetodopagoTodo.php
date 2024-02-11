<?php
session_start();
    include_once '../utilidades/DB.php';
    
    //$Usu = $_SESSION['ID_Usuario'];
    getCategoria();

        function getCategoria(){
            $DB = new DB();
            $q = "CALL sp_MetodopagoSelect();";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Metodopago'] = $ObjetoLista['ID_Metodopago'];
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>