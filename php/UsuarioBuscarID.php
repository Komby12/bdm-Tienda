<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $Usu = $_POST['Usuario'];
    getUsuario($Usu);

        function getUsuario($Usuario){
            $DB = new DB();
            $q = "CALL sp_UsuarioSelectID('$Usuario');";
            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $lista = null;
            while($ObjetoLista = $query->fetch())
            {
                $lista[$numero]['ID_Usuario'] = $ObjetoLista['ID_Usuario'];
                $lista[$numero]['Usuario'] = $ObjetoLista['Usuario'];
                $lista[$numero]['Nombre'] = $ObjetoLista['Nombre'];
                $lista[$numero]['Contrasena'] = $ObjetoLista['Contrasena'];
                $lista[$numero]['Imagen'] = $ObjetoLista['Imagen'];
                $lista[$numero]['Rol'] = $ObjetoLista['Rol'];
                $numero++;
            }

            echo json_encode($lista);
        }
?>