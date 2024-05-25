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
                        '<td><div class="product"><img src='+ data[i].Imagen+
                        '><h3>' + data[i].Nombre + '</h3>' +
                        '<p>' + data[i].Precio + '</p>' +
                        '</div></td></tr>');
                }
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error con la peticion de la base de datos.");
            }
        });
    }

    $(document).on('click','.rowProducto', function() {
        var id = this.id;
        console.log(id);
        $.ajax({
            type: "post",
            url:"./utilidades/ElegirProducto.php",
            data: {"ID": id},
            success: function(){
                window.location.href='producto.php';
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error al modificar categoria.");
            }
        });
    });
})