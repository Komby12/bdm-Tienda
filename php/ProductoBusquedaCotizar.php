<?php
session_start();
    include_once '../utilidades/DB.php';
    
    //$Busqueda = $_POST['Busqueda']
    $ID_Usu = $_SESSION['ID_Usuario'];
    //$Tipo = $_POST["Tipo"];

    getProductos($ID_Usu);

        function getProductos($Bus){
            $DB = new DB();
            $q = "CALL sp_ProductoSelectCotizar('$Bus');";

            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $Productos = null;
            while($ObjetoProducto = $query->fetch())
            {
                $Productos[$numero]['ID_Producto'] = $ObjetoProducto['ID_Producto'];
                $Productos[$numero]['Nombre'] = $ObjetoProducto['Nombre'];
                $numero++;
            }
            echo json_encode($Productos);
        }
?>