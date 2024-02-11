<?php
session_start();
    include_once '../utilidades/DB.php';
    
    $Usu = $_POST['Usuario'];
    $Con = $_POST['Contrasena'];
    getUsuario($Usu, $Con);

        function getUsuario($Usuario, $Contrasena){
            $DB = new DB();
            $q = "CALL sp_UsuarioLogin('$Usuario', '$Contrasena');";
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
            $_SESSION["ID_Usuario"] = $lista[0]['ID_Usuario'];
            $_SESSION["Usuario"] = $lista[0]['Usuario'];
            $_SESSION["Rol"] = $lista[0]['Rol'];
            $_SESSION['IDUsuarioVisita'] = 0;
            $_SESSION['ProductoBuscado'] = "";
            $_SESSION['Lista'] = 0;


            echo json_encode($lista);
        }
?>