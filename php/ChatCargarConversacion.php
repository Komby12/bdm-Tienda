<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['ID_Usuario'];
    $ID_Des = $_POST['ID_Destinatario'];
    getCategoria($ID_Usu, $ID_Des);

        function getCategoria($ID_Destinatario, $ID_Usuario){
            $DB = new DB();
            $q = "CALL sp_ChatSelectConversacion('$ID_Destinatario', '$ID_Usuario');";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Mensaje'] = $ObjetoLista['ID_Mensaje'];
                $lista[$numero]['Texto'] = $ObjetoLista['Texto'];
                $lista[$numero]['ID_Destinatario'] = $ObjetoLista['ID_Destinatario'];
                $lista[$numero]['ID_Remitente'] = $ObjetoLista['ID_Remitente'];
                $lista[$numero]['Usuario'] = $ObjetoLista['Usuario'];
                $lista[$numero]['ID_Producto'] = $ObjetoLista['ID_Producto'];
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $lista[$numero]['Cantidad'] = $ObjetoLista['Cantidad'];
                $lista[$numero]['Precio'] = $ObjetoLista['Precio'];
                $numero++;
            }
            echo json_encode($lista);
        }
?>