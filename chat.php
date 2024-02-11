<?php
	session_start();
	$ID_Usuario = $_SESSION['ID_Usuario'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="./Css/chater.css">
	<link rel="stylesheet" href="./Css/navbar.css"> 
	<link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
	<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
	<script src="./Js/jquery-3.7.1.min.js"></script>
	<script src="./Js/chating.js"></script>
	<title>Chat</title>
</head>
<body>
<ul>
     <li><a href="./principal.html">Principal</a></li>
     <li><a href="./BusqAdvan.html">Buqueda advanzada</a></li>
     <li>
       <a href="#">Social &#x25BE;</a>
       <ul class="dropdown">
        <li><a href="./Perfil.html">Perfil</a></li>
        <li><a href="./EditarPerfil.html">Editar Perfil</a></li>
        <li><a href="./listadeseos.html">Lista de deseos</a></li>
        <li><a href="./chat.php">Chat</a></li>
        <li><a href="./historial.html">Historial</a></li>
       </ul>
       </li>
     <li>
       <a href="#">Ventas &#x25BE;</a>
       <ul class="dropdown">
        <li><a href="./venta.html">Nueva venta</a></li>
        <li><a href="./AprobarProductos.html">Aprobar Productos</a></li>
        <li><a href="./Categorias.html">Crear categorias</a></li>
        <li><a href="./VentasVendedor.html">Mis ventas</a></li>
       </ul>
       </li>
       <li><a href="./utilidades/CerrarSesion.php">Salir</a></li>
       <li>
        <div class="buscar">
        <input type="text" placeholder="Buscar" required />
  
        <div class="btn">
          <i class="fas fa-search icon"></i>
        </div>
      </div>
    </li>
     
  </ul>

	<main class="contenedor">
		<input type = "hidden" id = "inputOtroUsuario">
		<input type = "hidden" id = "ID_Usuario" <?php echo "value = '$ID_Usuario';"?>>
		<article>
		  <div class="chat-container">
			<div class="chat">
			  <div class="message received">Hola, ¿cómo estás?</div>
			  <div class="message sent">¡Hola! Estoy bien, ¿y tú?</div>
			  </div>
			<div class="input-container">
			  <input type="text" id="message-input" placeholder="Escribe tu mensaje...">
			  <label for="select-input">Producto a cotizar: </label>
				<select id = "select-input"></select> <br>
				<label for="cantidad-input">Cantidad: </label>
			  <input type="number" id="cantidad-input" value = "0"><br>
			  <label for="precio-input">Precio: </label>
			  <input type="number" id="precio-input" value = "0"><br>
			  <button id="send-button">Enviar</button>
			  <button id="profile-button">Perfil</button>
			</div>
		  </div>
		
		  <label for = "BarraBuscar">Nombre de usuario:</label>
		  <input id = "BarraBuscar" name= "BarraBuscar">
		  <button id = "BotonBuscar">Buscar</button><br>
		<div class="users-list">
			</ul>
		  </div>
		</article>
	  </main>
	
	<script src="https://kit.fontawesome.com/2c36e9b7b1.js"></script>
	<!--<script src="./Js/chating.js"></script> -->
</body>
</html>