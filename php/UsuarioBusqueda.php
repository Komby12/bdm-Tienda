<?php
//session_start();
    include_once '../utilidades/DB.php';
    
    $Busqueda = $_POST['Busqueda'];

    getUsuarios($Busqueda);

        function getUsuarios($Bus){
            $DB = new DB();
            $q = "CALL sp_UsuarioSelect('$Bus');";

            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $Productos = null;
            while($ObjetoProducto = $query->fetch())
            {
                $Productos[$numero]['ID_Usuario'] = $ObjetoProducto['ID_Usuario'];
                $Productos[$numero]['Usuario'] = $ObjetoProducto['Usuario'];
                $Productos[$numero]['Imagen'] = $ObjetoProducto['Imagen'];
                $Productos[$numero]['Rol'] = $ObjetoProducto['Rol'];
                $Productos[$numero]['Publico'] = $ObjetoProducto['Publico'];
                $numero++;
            }
            echo json_encode($Productos);
        }
?>