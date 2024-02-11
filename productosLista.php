<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Productos en lista.</title>
    <!-- Todo lo de Bootstrap -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  
    <!-- Propios css -->
    <!--<link rel="stylesheet" href="../CSS/BarraNav.css">-->
    <link rel="stylesheet" href="../CSS/EstiloGeneral.css">
    <link rel="stylesheet" href="./Css/navbar.css"> 
  
    <script src="./Js/jquery-3.7.1.min.js"></script>
    <script src="./Js/ProductoLista.js"></script>
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


    <h2>
        Productos en lista
    </h2>
    <div>
        <label for = "BarraBuscar">Nombre de producto:</label>
        <input id = "BarraBuscar" name= "BarraBuscar">
        <button id = "BotonBuscar">Buscar</button>
        <input type = "hidden" id = "inputID" name= "BarraBuscar" >
    </div>
      <table style="width:100%" id = "TablaProductos">
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Borrar</th>
        </tr>
      </table>
    </body>
    </html> 