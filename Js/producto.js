$(document).ready(function(){
// const btnDepartamentos = document.getElementById('btn-departamentos'),
// 	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
// 	  grid = document.getElementById('grid'),
// 	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
// 	  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
// 	  esDispositivoMovil = () => window.innerWidth <= 800;

// btnDepartamentos.addEventListener('mouseover', () => {
// 	if(!esDispositivoMovil()){
// 		grid.classList.add('activo');
// 	}
// });

// grid.addEventListener('mouseleave', () => {
// 	if(!esDispositivoMovil()){
// 		grid.classList.remove('activo');
// 	}
// });

// document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
// 	elemento.addEventListener('mouseenter', (e) => {
// 		if(!esDispositivoMovil()){
// 			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
// 				categoria.classList.remove('activo');
// 				if(categoria.dataset.categoria == e.target.dataset.categoria){
// 					categoria.classList.add('activo');
// 				}
// 			});
// 		};
// 	});
// });

// // EventListeners para dispositivo movil.
// document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	if(contenedorEnlacesNav.classList.contains('activo')){
// 		contenedorEnlacesNav.classList.remove('activo');
// 		document.querySelector('body').style.overflow = 'visible';
// 	} else {
// 		contenedorEnlacesNav.classList.add('activo');
// 		document.querySelector('body').style.overflow = 'hidden';
// 	}
// });

// // Click en boton de todos los departamentos (Para version movil).
// btnDepartamentos.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	grid.classList.add('activo');
// 	btnCerrarMenu.classList.add('activo');
// });

// // Boton de regresar en el menu de categorias
// document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	grid.classList.remove('activo');
// 	btnCerrarMenu.classList.remove('activo');
// });

// document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
// 	elemento.addEventListener('click', (e) => {
// 		if(esDispositivoMovil()){
// 			contenedorSubCategorias.classList.add('activo');
// 			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
// 				categoria.classList.remove('activo');
// 				if(categoria.dataset.categoria == e.target.dataset.categoria){
// 					categoria.classList.add('activo');
// 				}
// 			});
// 		}
// 	});
// });

// // Boton de regresar en el menu de categorias
// document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
// 	boton.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		contenedorSubCategorias.classList.remove('activo');
// 	});
// });

// btnCerrarMenu.addEventListener('click', (e)=> {
// 	e.preventDefault();
// 	document.querySelectorAll('#menu .activo').forEach((elemento) => {
// 		elemento.classList.remove('activo');
// 	});
// 	document.querySelector('body').style.overflow = 'visible';
// });

cargarCalificaciones();
cargarListas();

$.ajax({
	type: "post",
	dataType:"json",
	url:"./php/ProductoPagina.php",
	data: {},
	success: function(data){
		if(data == null)
		{
			alert("No hubo resultados...");
			return;
		}
		for (var i = 0; i < data.length; i++)
		{
		console.log(data[i].Nombre);
		console.log(data[i].Descripcion);
		console.log(data[i].Precio);
		$('#Nombre').text(data[i].Nombre);
		$('#Restante').val(data[i].Existencia);
		$('#Descripcion').text(data[i].Descripcion);
		$('#Precio').text(data[i].Precio);
		$('#Vendedor').text(data[i].Usuario);
			console.log("cotizar: " + data[i].Cotizar);
		
		}
	},
	error: function(err) {
		console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
		alert("Error con la peticion de la base de datos.");
	}
});

$(document).on('click','.add-to-cart', function() {
	//var id = this.id;
	var Cantidad = $('#Cantidad').val();
	var Limite = $('#Restante').val()
	console.log("Tomaste: " + Cantidad);
	console.log("Limite: " + Limite);
	if(Cantidad <= 0)
	{
		alert("Debe de ordenar al menos un producto para introducirlo al carrito.");
		return;
	}
	if(Cantidad > Limite)
	{
		console.log("Muchos, maximo: " + Limite);
		alert("Favor de solo ordenar la cantidad disponible o menos de productos.");
		return;
	}
	$.ajax({
		type: "post",
		url:"./php/CarritoMeterProducto.php",
		data: {"Cantidad": Cantidad},
		success: function(){
			alert("Agregado al carrito!");
			window.location.href='BusqAdvan.html';
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error al agregar al carrito, intente de nuevo.");
		}
	});
});

$(".create-comment").click(function(){
	var cal = $("#Calificacion").val();
	var com = $("#Comentario").val();
	$.ajax({
		type: "post",
		url:"./php/CalificacionCrear.php",
		data: {"Calificacion": cal, "Comentario": com},
		success: function(){
			alert("Calificacion publicada!");
			cargarCalificaciones();
		},
		error: function(err) {
			alert("Error, calificacion no fue publicada.");
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
		}
	});
});

$(".botonLista").click(function(){
	var lista = $("#selectLista").val();
	$.ajax({
		type: "post",
		url:"./php/ListaMeterProducto.php",
		data: {"ID_Lista": lista},
		success: function(){
			alert("Metido en lista!");
			cargarCalificaciones();
		},
		error: function(err) {
			alert("Error, calificacion no fue publicada.");
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
		}
	});
});

function cargarListas()
{
$.ajax({
	type: "get",
	dataType:"json",
	url:"./php/ListaObtenerPropias.php",
	data: null,
	success: function(data){
		$("#TablaCategorias tr.rowCategoria").remove();
		if(data == null)
		{
			//alert("No tienes categorias");
			return;
		}
		console.log(data);
		for (var i = 0; i < data.length; i++)
		{
			$('#selectLista').append($('<option>',{
				value: data[i].ID_Lista,
				text: data[i].Nombre
				}));
		}
	},
	error: function(err) {
		console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
		alert("Error al intentar cargar sus productos.");
	}
});
}

function cargarCalificaciones(){

	$("#Calificacion").val("");
	$("#Comentario").val("");
	$.ajax({
		type: "post",
		dataType:"json",
		//cambiar url!
		url:"./php/CalificacionObtener.php",
		data: {},
		success: function(data){
			if(data == null)
			{
				return;
			}

			$(".areaComentarios .Comentario").remove();
			//$(".tuComentario .Comentario").remove();
			var ID_Usu = $("#ID_Usuario").val()

			for (var i = 0; i < data.length; i++)
			{
			console.log(data[i].ID_PRODUCTO);
			console.log(data[i].ID_USER);
			console.log(data[i].Calificacion);
			console.log(data[i].Comentario);
			console.log(data[i].Usuario);


			if(data[i].ID_Usuario == ID_Usu)
			{
				$("#Calificacion").val(data[i].Calificacion);
				$("#Comentario").val(data[i].Comentario);
				//$("#botonSubir").hide()
				//$("#botonModificar").show()
				//$("#botonEliminar").show()

				$('.tuComentario').append(
					'<div class = "Comentario">' +
					'<h3>Tu comentario</h3><br>' +
					'<img src= ' + data[i].img + ' alt="A user.">' +
					'<h4>' + data[i].Usuario + '</h4>' +
					'<p>Calificacion: ' + data[i].Calificacion + '</p>' +
					'<p>' + data[i].Comentario + '</p>' +
					
					'</div>');
			}
			else 
			{
			$('.areaComentarios').append(
				'<div class = "Comentario">' +
				'<img src=  "' + data[i].img + '" alt=" A user.">' +
				'<h4>' + data[i].Usuario + '</h4>' +
				'<p>Calificacion: ' + data[i].Calificacion + '</p>' +
				'<p>' + data[i].Comentario + '</p>' +
				'</div>');
			}
			}
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	})
}

});