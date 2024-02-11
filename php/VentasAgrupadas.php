<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];

    $FiltroFecha = $_POST['FiltroFecha'];
    $FiltroCategoria = $_POST['FiltroCategoria'];

    $Categoria = $_POST['Categoria'];
    $FechaInicial = $_POST['FechaInicial'];
    $FechaFinal = $_POST['FechaFinal'];

    $q = "CALL sp_CompraVentaAgrupada('$ID_Usu');";

    if($FiltroCategoria == 0 && $FiltroFecha == 0)
    {
        //$q = "CALL sp_CompraVentaAgrupada('$i');";
    }
    if($FiltroCategoria == 1 && $FiltroFecha == 0)
    {
        $q = "CALL sp_CompraVentaAgrupadaCategoria('$ID_Usu', '$Categoria');";
    }
    if($FiltroCategoria == 0 && $FiltroFecha == 1)
    {
        $q = "CALL sp_CompraVentaAgrupadaFecha('$ID_Usu', '$FechaInicial', '$FechaFinal');";
    }
    if($FiltroCategoria == 1 && $FiltroFecha == 1)
    {
        $q = "CALL sp_CompraVentaAgrupadaCategoriaFecha('$ID_Usu', '$Categoria', '$FechaInicial', '$FechaFinal');";
    }

    getVentaUsuario($q);

        function getVentaUsuario($qu){
            $DB = new DB();
            $query =  $DB->conectar()->query($qu);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['Fecha'] = $ObjetoLista['Fecha'];
                $lista[$numero]['Categoria'] = $ObjetoLista['Categoria'];
                $lista[$numero]['Ventas'] = $ObjetoLista['Ventas'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>