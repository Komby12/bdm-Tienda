$(document).ready(function(){

    recargarProductos();
    function recargarProductos()
    {
    //var id = $("#inputID").val()
    $.ajax({
        type: "post",
        dataType:"json",
        url:"./php/ProductoListaAdquirir.php",
        data: {},
        success: function(data){
            $("#TablaProductos tr.rowProducto").remove();
            if(data == null)
            {
                alert("Lista vacia.");
                return;
            }
            console.log(data);
            for (var i = 0; i < data.length; i++)
            {
            console.log(data[i].ID_Producto);
            console.log(data[i].Nombre);
            console.log(data[i].Precio);
            $('#TablaProductos').append(
            '<tr class = "rowProducto" id=' + data[i].ID + '>' + 
            '<td>' + data[i].Nombre +
            '</td><td>' + data[i].Precio +
            '</td><td> <button id =' + data[i].ID_Producto + ' class = "botonEliminar">Eliminar</button>' +
            '</td></tr>');

            }
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error con la peticion de la base de datos.");
        }
    });
}
    $(document).on('click','.botonEliminar', function() {
        var prod = this.id;
        console.log(prod);
        $.ajax({
            type: "post",
            url:"./php/ProductoListaEliminar.php",
            data: {"ID_Producto": prod},
            success: function(data){
                alert("Borrado!");
                recargarProductos();
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error con la peticion de la base de datos.");
            }
        });
    });
});