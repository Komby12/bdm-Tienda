$(document).ready(function(){
    
    obtenerCarrito();

    $(document).on('click','.botonBorrar', function() {
        var prod = this.id;
        console.log(prod);
        $.ajax({
            type: "post",
            url:"./php/CarritoSacarProducto.php",
            data: {"ID_Producto": prod},
            success: function(data){
                alert("Producto eliminado.");
                obtenerCarrito();
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            }
        });
    });


    function obtenerCarrito(){
        $.ajax({
            type: "get",
            dataType:"json",
            url:"./php/CarritoObtener.php",
            data: null,
            success: function(data){
                $("#lista-productos li").remove();
                if(data == null)
                {
                    alert("Carrito vacio");
                    return;
                }
                console.log(data);
                for (var i = 0; i < data.length; i++)
                {
                console.log(data[i].ID_Producto);
                console.log(data[i].Nombre);
                console.log(data[i].Precio);
                console.log(data[i].Cantidad);
                $('#lista-productos').append(
                    '<li class="producto">' +
                    '<img src="./img/imagenpendiente" alt="Producto-1">' +
                    '<p>' + data[i].Nombre + '</p>' +
                    '<p>' + data[i].Precio + '$</p>' +
                    '<p> Cantidad: ' + data[i].Cantidad + '</p>' +
					'<button class = "botonBorrar" id = "' + data[i].ID_Producto + '">Borrar</button>' +
                     '</li>'
                );
                }
            }
        });
    }
});