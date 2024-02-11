<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $ID_Usu = $_SESSION['OtroUsuario'];

    getUsuarios($ID_Usu);

        function getUsuarios($Bus){
            $DB = new DB();
            $q = "CALL sp_UsuarioPerfil('$Bus');";

            $query =  $DB->conectar()->query($q);
            $numero = 0;
            $Productos = null;
            while($ObjetoProducto = $query->fetch())
            {
                $Productos[$numero]['ID_Usuario'] = $ObjetoProducto['ID_Usuario'];
                $Productos[$numero]['Usuario'] = $ObjetoProducto['Usuario'];
                $Productos[$numero]['Nombre'] = $ObjetoProducto['Nombre'];
                $Productos[$numero]['Contrasena'] = $ObjetoProducto['Contrasena'];
                $Productos[$numero]['Imagen'] = $ObjetoProducto['Imagen'];
                $Productos[$numero]['Rol'] = $ObjetoProducto['Rol'];
                $Productos[$numero]['Sexo'] = $ObjetoProducto['Sexo'];
                $Productos[$numero]['Publico'] = $ObjetoProducto['Publico'];
                $Productos[$numero]['FechaNacimiento'] = $ObjetoProducto['FechaNacimiento'];
                $Productos[$numero]['FechaIngreso'] = $ObjetoProducto['FechaIngreso'];
                $Productos[$numero]['Email'] = $ObjetoProducto['Email'];
                $numero++;
            }
            echo json_encode($Productos);
        }
?>