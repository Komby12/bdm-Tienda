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
	<link rel="stylesheet" href="./Css/producto.css">
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
	<script src="./Js/producto.js"></script>
	

	<title>Producto</title>
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
		<article>
            <div class="product-card">
				<input type = "hidden" id = "ID_Usuario" <?php echo "value = $ID_Usuario" ?> >
                <div class="product-image">
                </div>
                <div class="product-info" style="width: 100%;">
                  <h2 class="product-name" id="Nombre">Nombre del Producto</h2>

				  <label> Listas: </label>
				  <select id = "selectLista"></select>
					<button class="botonLista">Poner en lista</button>

                  <!-- <input type="text" class="product-quantity" style="width: 100px;" placeholder="Cantidad Restante" disabled><br> -->
				  <label>Cantidad restante: </label> <input type = "number" id = "Restante" disabled> <br>
				  <label> Cantidad a tomar: </label>
                  <input type="number" class="product-quantity" style="width: 100px;" 
				  placeholder="Cantidad a Llevar" min = "1" id = "Cantidad" value = "1"><br>
				  <label> Precio: </label>
				  <h3 id="Precio">Precio</h3><br> 
				  <img src="imagen-perfil.png" alt="Imagen del Producto">
                  <p class="product-description" id = "Descripcion">Descripción</p><br>
				  <label> Vendedor: </label>
				  <h4 id="Vendedor">Vendedor</h4>
                  <ul class="product-rating">
                    <li><i class="fa fa-star" style="width: 20px;"></i></li>
                    <li><i class="fa fa-star" style="width: 20px;"></i></li>
                    <li><i class="fa fa-star" style="width: 20px;"></i></li>
                    <li><i class="fa fa-star" style="width: 20px;"></i></li>
                    <li><i class="fa fa-star-half-o" style="width: 20px;"></i></li>
                  </ul>
                  <button class="add-to-cart">Agregar al Carrito</button>
                </div>
				
               
              </div>
        </article>

		<div>
			<h4>Evaluar</h4>
			<label> Calificacion: </label>
			<input type = "number" min = "1" max = "10"  id= "Calificacion" value = "10"> <br> <br>
			<label> Comentario: </label>
			<input type = "text" id= "Comentario"><br> <br>
			<button class="create-comment">Crear Comentario</button>
		</div>
		<div class = "tuComentario"><div>
		<div class = "areaComentarios">
		<div class="user-info">
			<div class="user-image">
			  <img src="imagen.png" alt="Imagen de Perfil">
			  
			</div>
			<h3 class="user-name">Nombre de Usuario</h3>
			<p class="user-comment">
			  Comentario
			  <input type="number" class="product-rating" placeholder="Puntaje">
			  <i class="fa fa-star"></i>
			</p>
		  </div>
</div>
	</main>
	
	<script src="https://kit.fontawesome.com/2c36e9b7b1.js"></script>

</body>
</html>