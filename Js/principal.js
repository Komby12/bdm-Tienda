$(document).ready(function(){

    cargarProductos();

    function cargarProductos()
    {
        $.ajax({
            type: "post",
            dataType:"json",
            url:"./php/ProductoPantallaPrincipal.php",
            data: {},
            success: function(data){
                if(data == null)
                {
                    alert("No hubo resultados...");
                    return
                }
                for (var i = 0; i < data.length; i++)
                {
                    $('#TablaProductos').append(
                        '<tr class = "rowProducto" id=' + data[i].ID_Producto + '>' +
                        '<td>' + data[i].Nombre +
                        '</td><td>' + data[i].Precio +
                        '</td><td>' + data[i].Calificacion +
                        '</td></tr>');
                }
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error con la peticion de la base de datos.");
            }
        });
    }
})