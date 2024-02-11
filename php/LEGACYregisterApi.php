<?php
include '../utilidades/DB.php';

try {
    // Intenta establecer la conexión a la base de datos
    $mysqli = db::connect();

    // Crear un arreglo para almacenar la respuesta
    $response = array();

    // Verifica que la solicitud sea POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Lee los datos del formulario
        $username = $_POST['username'];
        $password = $_POST['password'];
        //$foto = $_FILES['foto']['name']; // Nombre del archivo de imagen
        $foto = $_FILES['foto']
        $email = $_POST['email'];
        $role = $_POST['role'];
        $nombre = $_POST['name'];
        $birthdate = $_POST['birthdate'];
        $gender= $_POST['gender'];
        $visibilidad = 1;
        $estatus = 1;
        date_default_timezone_set('America/Mexico_City'); // Cambia 'America/Mexico_City' a tu zona horaria
        $fechaIngreso = date('Y-m-d');

        // Llama al procedimiento almacenado para verificar la existencia del usuario
        $verificarQuery = "CALL VerificarUsuarioExistente(?, ?, @UsuarioExistente)";
        if ($verificarStmt = $mysqli->prepare($verificarQuery)) {
            $verificarStmt->bind_param('ss', $email, $username);
            $verificarStmt->execute();
            $verificarStmt->close();
        }

        // Obtener el resultado de la verificación (0 si no existe, 1 si existe)
        $verificarResult = $mysqli->query("SELECT @UsuarioExistente AS UsuarioExistente");
        $row = $verificarResult->fetch_assoc();
        $usuarioExistente = $row['UsuarioExistente'];

        if ($usuarioExistente == 1) {
            $response["error"] = "El correo o nombre de usuario ya está en uso.";
        } else {
            // Llama al procedimiento almacenado para registrar al usuario como Comprador o Vendedor según el rol
            if ($role == "comprador") {
                $query = "CALL RegistrarUsuarioComoComprador(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            } elseif ($role == "vendedor") {
                $query = "CALL RegistrarUsuarioComoVendedor(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            } else {
                $response["error"] = "Rol inválido.";
            }

            if (!isset($response["error"])) {
                if ($stmt = $mysqli->prepare($query)) {
                    // Asegúrate de que los tipos de datos en "bind_param" coincidan con tu procedimiento almacenado
                    $stmt->bind_param('ssssssssss', $username, $password, $foto, $nombre, $birthdate,$gender, $fechaIngreso, $visibilidad, $estatus, $email);

                    if ($stmt->execute()) {
                        $response["message"] = "El Usuario se registró satisfactoriamente.";
                    } else {
                        $response["error"] = "Ha ocurrido un error.";
                    }

                    $stmt->close();
                } else {
                    $response["error"] = "Ha ocurrido un error.";
                }
            }
        }
    } else {
        $response["error"] = "Método de solicitud no válido.";
    }

    // Cierra la conexión a la base de datos
    $mysqli->close();

    // Devuelve la respuesta como JSON
    header("Content-Type: application/json");
    echo json_encode($response);
} catch (Exception $e) {
    $response["error"] = "Error interno del servidor: " . $e->getMessage();
    echo json_encode($response);
}
?>