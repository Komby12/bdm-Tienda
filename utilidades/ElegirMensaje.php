<?php
session_start();
$Mensaje = $_POST['ID_Mensaje'];
$_SESSION['Mensaje'] = $Mensaje;
?>