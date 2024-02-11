<?php
session_start();

$busqueda =  $_REQUEST['barraProducto'];

$_SESSION['ProductoBuscado'] = $busqueda;

header("location:../pantallas/BusquedaProductos.php");
?>