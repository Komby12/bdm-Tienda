<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];
    getLista($ID_Usu);

        function getLista($ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_ListaSelectUsuarioTodas('$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Lista'] = $ObjetoLista['ID_Lista'];
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $lista[$numero]['Descripcion'] = $ObjetoLista['Descripcion'];
                $lista[$numero]['Publica'] = $ObjetoLista['Publica'];
                $lista[$numero]['ID_Usuario'] = $ObjetoLista['ID_Usuario'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>