<?php
session_start();
$Lista = $_POST['ID_Lista'];
$_SESSION['Lista'] = $Lista;
?>