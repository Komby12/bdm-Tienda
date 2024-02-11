$(document).ready(function(){


cargarProductos();


$(document).on('click','.botonAprobar', function() {
	var id = this.id;
	console.log(id);
	$.ajax({
		type: "post",
		url:"./php/ProductoAprobar.php",
		data: {"Producto": id},
		success: function(data){
			alert("Producto aprovado"); 
			cargarProductos();
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Error con la peticion de la base de datos.");
		}
	});

});


function cargarProductos()
    {
        $.ajax({
            type: "post",
            dataType:"json",
            url:"./php/ProductoBusquedaNoAprobado.php",
            data: {"Busqueda":""},
            success: function(data){
                if(data == null)
                {
                    alert("No hubo resultados...");
                    return
                }
				$("#TablaProductos tr.rowProducto").remove();
                for (var i = 0; i < data.length; i++)
                {
                    $('#TablaProductos').append(
                        '<tr class = "rowProducto" id=' + data[i].ID_Producto + '>' +
                        '<td>' + data[i].Nombre +
                        '</td><td>' + data[i].Precio +
                        '</td><td>' + data[i].Vendedor +
						'</td><td> <button id =' + data[i].ID_Producto + ' class = "botonAprobar">Aprobar</button>' +
                        '</td></tr>');
                }
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error con la peticion de la base de datos.");
            }
        });
    }



});