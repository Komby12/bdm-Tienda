$(document).ready(function(){
    $("#botonSubir").click(function(){
        alert("Entre");
        var nombre = $("#Nombre").val()
	    var descripcion = $("#Descripcion").val()
        var precio = $("#Precio").val()
	    var existencias = $("#Existencias").val()
        var categoria = $("#Categorias").val()
        var imagen = $('#fotoProducto')[0].files[0];
	    var cotizar = 0;
        if($("#Cotizar").is(":checked"))
        {
            cotizar = 1;
        }

        if(nombre == "" || descripcion == "" || (precio == 0 && cotizar == 0) || existencias == 0)
        {
            alert("favor de llenar los campos");
            return;
        }

        var reader = new FileReader();
        reader.onload = function(event){
            var imagenBase64 = event.target.result;

            $.ajax({
                type: "post",
                url:"./php/ProductoCrear.php",
                data: {"Nombre": nombre, "Descripcion": descripcion, "Precio": precio, 
                "Existencia": existencias, "Cotizacion": cotizar, 'Imagen': imagenBase64,
                 "ID_Categoria": categoria},
                success: function(){
                    alert("Producto creado!");
                    window.location.href='principal.html';
                },
                error: function(err) {
                    console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                    alert("Error al crear usuario, intente de nuevo.");
                }
            });
        }  
        reader.readAsDataURL(imagen);     

    });

    cargarCategorias()


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
                $('#Categorias').append($('<option>',{
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
});