<?php
//session_start();
    include_once '../utilidades/DB.php';
    
    $Busqueda = $_POST['Busqueda'];
    $Tipo = $_POST["Tipo"];

    getProductos($Busqueda, $Tipo);

        function getProductos($Bus, $Tip){
            $DB = new DB();
            $q = "CALL sp_ProductoBusquedaNombre('$Bus');";
            
            // if ($Tip == "Normal")
            // {
            //     $q = "CALL sp_ProductoBusquedaNombre('$Bus');";
            // }
            if ($Tip == "MayorPrecio")
            {
                $q = "CALL sp_ProductoBusquedaMayorPrecio('$Bus');";
            }
            if($Tip == "MenorPrecio")
            {
                $q = "CALL sp_ProductoBusquedaMenorPrecio('$Bus');";
            }
            if($Tip == "MejorEvaluacion")
            {
                $q = "CALL sp_ProductoBusquedaMejorCalificacion('$Bus');";
            }

            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $Productos = null;
            while($ObjetoProducto = $query->fetch())
            {
                $Productos[$numero]['ID_Producto'] = $ObjetoProducto['ID_Producto'];
                $Productos[$numero]['Nombre'] = $ObjetoProducto['Nombre'];
                $Productos[$numero]['Precio'] = $ObjetoProducto['Precio'];
                $Productos[$numero]['Categoria'] = $ObjetoProducto['Categoria'];
                $Productos[$numero]['Calificacion'] = $ObjetoProducto['Calificacion'];
                $Productos[$numero]['Vendedor'] = $ObjetoProducto['Vendedor'];
                $numero++;
            }
            echo json_encode($Productos);
        }
?>