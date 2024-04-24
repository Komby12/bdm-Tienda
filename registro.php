<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" type="text/css" href="../bdm-Tienda/Css/registro.css" media="screen" />
    <script src="../bdm-Tienda/Js/jquery-3.7.1.min.js"></script>
    <script src="../bdm-Tienda/Js/registrar.js"></script>
</head>
<body>
    <div class="background">
        <div class="registration-container">
            <h2>Registro</h2>
            <form class = "form" id="registration-form" method="POST" action="php/UsuarioRegistrar.php" enctype="multipart/form-data">
                <label class="input-label" for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" class="input-field" placeholder="Correo Electrónico" required>
                
                <label class="input-label" for="username">Nombre de Usuario:</label>
                <input type="text" id="username" name="username" class="input-field" placeholder="Nombre de Usuario" required>
                
                <label class="input-label" for="password">Contraseña:</label>
                <input type="password" id="password" name="password" class="input-field" placeholder="Contraseña" required>
                
                <label class="input-label" for="role">Rol:</label>
                <select id="role" name="role" class="input-field" required>
                    <option value="1">Comprador</option>
                    <option value="2">Vendedor</option>
                </select>
                <label class="input-label" for="profile-photo">Foto de Perfil:</label>
                <input type="text" id="foto" name="foto">
                <!-- <input type="file" id="foto" name="foto" accept="image/*"> -->
                <input type="hidden" id="foto-name" name="foto-name" class="input-field" placeholder="Nombre de la foto" readonly>
                
                <label class="input-label" for="first-name">Nombre:</label>
                <input type="text" id="name" name="name" class="input-field" placeholder="Nombre" required>

                
                <label class="input-label" for="birthdate">Fecha de Nacimiento:</label>
                <input type="date" id="birthdate" name="birthdate" class="input-field" max="2005-12-31">
                
                <div class="input-label">Sexo:</div>
                <div class="gender-options">
                <input type="radio" id="male" name="gender" value="H" required checked>
                <label for="male">Masculino</label>
                <input type="radio" id="female" name="gender" value="M" required>
                <label for="female">Femenino</label>
                </div>

                <div class="input-label">Privacidad:</div>
                <div class="privacy-options">
                <input type="radio" id="private" name="privacy" value="0" required>
                <label for="male">Privado</label>
                <input type="radio" id="public" name="privacy" value="1" required checked>
                <label for="female">Publico</label>
                </div>
                
                <button type="button" id="botonSubir" class="btn">Registrarse</button>
            </form>
            <p id="registro-exitoso" style="color: green;"></p>
            <div id="alert-message" style="display: none;"></div>
            <a href="index.php" class="login-link">¿Ya tienes una cuenta? Inicia sesión</a>
        </div>
    </div>
    <footer class="footer">
        <p>Derechos de autor © 2023. Todos los derechos reservados.</p>
        <a href="politica-de-privacidad.html">Política de Privacidad</a>
    </footer>

</body>
</html>