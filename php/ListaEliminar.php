<?php
session_start();
    include_once '../utilidades/DB.php';

    $ID_Lis = $_POST['ID_Lista'];
    //$ID_Usu = $_SESSION['ID_Usuario'];

    eliminarLista($ID_Lis);

        function eliminarLista($ID_Lista){
            $DB = new DB();
            $q = "CALL sp_ListaDelete('$ID_Lista');";
            $query =  $DB->conectar()->query($q);
        }
?>