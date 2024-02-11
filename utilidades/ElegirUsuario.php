<?php
session_start();
$Lista = $_POST['ID_Usuario'];
$_SESSION['OtroUsuario'] = $Lista;
?>