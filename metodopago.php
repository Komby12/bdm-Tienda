<?php
include_once './utilidades/Config.php'; 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="./Css/metodopago.css">
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
	<script src="./Js/pago.js"></script>
	<script src="https://www.paypal.com/sdk/js?client-id=<?php echo CLIENT_ID; ?>&currency=USD"></script>

    <link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
	integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
	crossorigin="anonymous"
	referrerpolicy="no-referrer"
  />

  <!-- Bootstrap CSS -->
  <link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
	rel="stylesheet"
  />

	<title>Metodo de Pago</title>
</head>
<body>
<ul class="primario">
		<li><a href="./principal.html">Principal</a></li>
		<li><a href="./BusqAdvan.html">Búsqueda avanzada</a></li>
		<li class="Adropdown">
			<a href="#">Social &#x25BE;</a>
			<ul class="dropdown">
				<li><a href="./Perfil.html">Perfil</a></li>
				<li><a href="./EditarPerfil.html">Editar Perfil</a></li>
				<li><a href="./listadeseos.html">Lista de deseos</a></li>
				<li><a href="./chat.php">Chat</a></li>
				<li><a href="./historial.html">Historial</a></li>
			</ul>
		</li>
	
		<li class="Adropdown">
			<a href="#">Ventas &#x25BE;</a>
			<ul class="dropdown">
				<li><a href="./venta.html">Nueva venta</a></li>
				<li><a href="./AprobarProductos.html">Aprobar Productos</a></li>
				<li><a href="./Categorias.html">Crear categorias</a></li>
				<li><a href="./VentasVendedor.html">Mis ventas</a></li>
			</ul>
		</li>
	
		<li>
			<a href="./utilidades/CerrarSesion.php">Salir</a>
		</li>
		<li>
			<div class="buscar">
				<input type="text" placeholder="Buscar" required />
				<div class="btnn">
					<i class="fas fa-search icon"></i>
				</div>
			</div>
		</li>
	</ul>


	<div id= "paypal-button-container"></div>


	<main class="contenedor">
        <article>
                <div class="contador">
                  <p>Precio:</p>
                  <input type="number" id="Total" value="0" disabled /> <br>
				  <p>Direccion:</p>
                  <input type="text" id="Direccion" />
                </div>
                <div class="metodo-pago">
                  <p>Método de pago:</p>
                  <select id="Metodopago">
                    <!-- <option value="paypal">PayPal</option>
                    <option value="visa">VISA</option>
                    <option value="american-express">American Express</option>
                    <option value="banorte">Banorte</option> -->
                  </select>
                </div>
				<div id="paypal-button-container"></div>
                <button type="button" id = "botonComprar">Finalizar compra</button>              
        </article>
	</main>
	
	
	<script src="https://kit.fontawesome.com/2c36e9b7b1.js"></script>
	<!-- <script src="./Js/metodopago.js"></script> -->
	<script src="https://www.paypal.com/sdk/js?client-id=AZZmol0kpp7NEJjRcDJ7lbeexIZ3grt4oKTWrP1A0lhJVyzBm-k8WIUNQ9Dp9OGOPT3LdhZ4w7y3cj&currency=MXN"></script>

</body>
</html>