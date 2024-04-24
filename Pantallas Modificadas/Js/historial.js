$(document).ready(function(){



adquirirPedidos();

$("#botonBuscar").click(function(){
    adquirirPedidos();
});

cargarCategorias();
$("#inputFechaInicio").val("2022-12-12");
$("#inputFechaFinal").val("2023-12-20");

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
			}
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});
}


function adquirirPedidos(){
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
		url:"./php/Historial.php",
		data: {"FiltroCategoria": filtroCategoria, "FiltroFecha": filtroFecha, 
		"Categoria": categoria, "FechaInicial": fechaInicio, "FechaFinal": fechaFinal},
		success: function(data){
			$("#TablaPedidos tr.rowPedido").remove();
			if(data == null)
			{
				alert("No hay pedidos");
				return;
			}
			for (var i = 0; i < data.length; i++)
			{
			$('#TablaPedidos').append(
			'<tr class = "rowPedido"' + '>' +
			'<td>' + data[i].Fecha +
			'</td><td>' + data[i].Categoria +
			'</td><td>' + data[i].Nombre +
			'</td><td>' + data[i].Calificacion +
			'</td><td>' + data[i].Precio +
			'</td></tr>');
			}
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});
}






const table = document.querySelector("table");
const input = document.querySelector("input");
const button = document.querySelector("button");

function search() {
  const value = input.value.toLowerCase();
  const rows = table.querySelectorAll("tr");

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.querySelectorAll("td");

    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];
      const text = cell.textContent.toLowerCase();

      if (text.includes(value)) {
        row.style.display = "table-row";
        break;
      } else {
        row.style.display = "none";
      }
    }
  }
}

input.addEventListener("keyup", search);
button.addEventListener("click", search);

});