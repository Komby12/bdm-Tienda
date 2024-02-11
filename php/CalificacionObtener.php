<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Pro = $_SESSION['Producto'];
    getCalificacion($ID_Pro);

        function getCalificacion($ID_Producto){
            $DB = new DB();
            $q = "CALL sp_CalificacionSelect('$ID_Producto');";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Producto'] = $ObjetoLista['ID_Producto'];
                $lista[$numero]['Usuario'] = $ObjetoLista['Usuario'];
                $lista[$numero]['Calificacion'] = $ObjetoLista['Calificacion'];
                $lista[$numero]['Comentario'] = $ObjetoLista['Comentario'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>