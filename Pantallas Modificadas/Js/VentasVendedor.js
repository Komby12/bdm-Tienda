$(document).ready(function(){


cargarCategorias();
$("#inputFechaInicio").val("2022-12-12");
$("#inputFechaFinal").val("2023-12-20");
$("#inputFechaInicioAgrupado").val("2022-12-12");
$("#inputFechaFinalAgrupado").val("2023-12-20");


$("#botonBuscar").click(function(){
	adquirirVentasDetalle();
});

$("#botonBuscarAgrupado").click(function(){
	adquirirVentasAgrupadas();
});


function cargarCategorias(){
	$.ajax({
		type: "post",
		dataType:"json",
		url:"./php/CategoriaObtenerTodo.php",
		data: {},
		success: function(data){
			if(data == null)
			{
				alert("No hubo resultados...");
				return
			}
			for (var i = 0; i < data.length; i++)
			{
			$('#selectCategoria').append($('<option>',{
				value: data[i].ID_Categoria,
				text: data[i].Nombre
				}));

				$('#selectCategoriaAgrupado').append($('<option>',{
					value: data[i].ID_Categoria,
					text: data[i].Nombre
					}));
			}
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});
}


function adquirirVentasDetalle(){
	var filtroCategoria = 0;
	var filtroFecha = 0;
	var categoria = "";
	var fechaInicio = "";
	var fechaFinal = "";
	if($('#checkCategoria').is(":checked"))
	{
		filtroCategoria = 1;
	}
	if($('#checkFechas').is(":checked"))
	{
		filtroFecha = 1;
	}
	categoria = $("#selectCategoria").val();
	fechaInicio = $("#inputFechaInicio").val();
	fechaFinal = $("#inputFechaFinal").val();
	$.ajax({
		type: "post",
		dataType:"json",
		url:"./php/Ventas.php",
		data: {"FiltroCategoria": filtroCategoria, "FiltroFecha": filtroFecha, 
		"Categoria": categoria, "FechaInicial": fechaInicio, "FechaFinal": fechaFinal},
		success: function(data){
			$("#tabla-consulta-detallada tr.rowPedido").remove();
			if(data == null)
			{
				alert("No hay pedidos");
				return;
			}
			for (var i = 0; i < data.length; i++)
			{
			$('#tabla-consulta-detallada').append(
			'<tr class = "rowPedido"' + '>' +
			'<td>' + data[i].Fecha +
			'</td><td>' + data[i].Categoria +
			'</td><td>' + data[i].Nombre +
			'</td><td>' + data[i].Calificacion +
			'</td><td>' + data[i].Precio +
			'</td><td>' + data[i].Existencia +
			'</td></tr>');
			}
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});
}


function adquirirVentasAgrupadas(){
	var filtroCategoria = 0;
	var filtroFecha = 0;
	var categoria = "";
	var fechaInicio = "";
	var fechaFinal = "";
	if($('#checkCategoriaAgrupado').is(":checked"))
	{
		filtroCategoria = 1;
	}
	if($('#checkFechasAgrupado').is(":checked"))
	{
		filtroFecha = 1;
	}
	categoria = $("#selectCategoriaAgrupado").val();
	fechaInicio = $("#inputFechaInicioAgrupado").val();
	fechaFinal = $("#inputFechaFinalAgrupado").val();
	$.ajax({
		type: "post",
		dataType:"json",
		url:"./php/VentasAgrupadas.php",
		data: {"FiltroCategoria": filtroCategoria, "FiltroFecha": filtroFecha, 
		"Categoria": categoria, "FechaInicial": fechaInicio, "FechaFinal": fechaFinal},
		success: function(data){
			$("#tabla-consulta-agrupada tr.rowPedido").remove();
			if(data == null)
			{
				alert("No hay pedidos");
				return;
			}
			for (var i = 0; i < data.length; i++)
			{
			$('#tabla-consulta-agrupada').append(
			'<tr class = "rowPedido"' + '>' +
			'<td>' + data[i].Fecha +
			'</td><td>' + data[i].Categoria +
			'</td><td>' + data[i].Ventas +
			'</td></tr>');
			}
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});
}




// Inicializar la tabla con 5 filas vacías
function inicializarTabla() {
    var tabla = document.getElementById("tabla-consulta-detallada");
    for (var i = 0; i < 5; i++) {
      tabla.insertRow(tabla.rows.length);
    }
  }
  
  // Ejecutar la función al cargar la página
  //document.addEventListener("DOMContentLoaded", inicializarTabla);

  // Inicializar la tabla con 5 filas vacías
function inicializarTabla() {
    var tabla = document.getElementById("tabla-consulta-agrupada");
    for (var i = 0; i < 5; i++) {
      tabla.insertRow(tabla.rows.length);
    }
  }
  
  // Ejecutar la función al cargar la página
  //document.addEventListener("DOMContentLoaded", inicializarTabla);
});