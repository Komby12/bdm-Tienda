$(document).ready(function(){
    // $("#Imagen").val();
    // $("#Usuario").val();
    // $("#Email").val();

    $.ajax({
        type: "get",
        dataType:"json",
        url:"./php/UsuarioPerfilAgeno.php",
        data: null,
        success: function(data){
            //$("#TablaCategorias tr.rowCategoria").remove();
            if(data == null)
            {
                alert("No tienes categorias");
                return;
            }
            console.log(data);
            for (var i = 0; i < data.length; i++)
            {
            console.log(data[i].Imagen);

            $("#inputUsuario").text(data[i].Usuario);
            $("#Email").text(data[i].Email);
            //$("#Contrasena").val(data[i].Contrasena);
            $("#Imagen").attr("src", data[i].Imagen); 
            }
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error al intentar cargar su perfil.");
        }
    });

    $.ajax({
        type: "get",
        dataType:"json",
        url:"./php/ProductoVendedorAgeno.php",
        data: null,
        success: function(data){
            $("#TablaProductos tr.rowProductos").remove();
            if(data == null)
            {
                alert("No tiene productos");
                return;
            }
            console.log(data);
            for (var i = 0; i < data.length; i++)
            {
                console.log(i);
                $('#TablaProductos').append(
                    '<tr class = "rowProducto" id=' + data[i].ID_Producto + '>' + 
                    '<td>' + data[i].Nombre  +
                    '</td><td>' + data[i].Descripcion +
                    '</td><td>' + data[i].Precio +
                    '</td></tr>');
        
            }
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error al intentar cargar su perfil.");
        }
    })
});