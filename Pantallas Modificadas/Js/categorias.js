$(document).ready(function(){

    $(document).on('click','.modificarCategoria', function() {
        $('#idModificar').val(this.id);
    });

    $("#botonSubir").click(function(){
        var nombre = $("#nombre").val()
	    var descripcion = $("#descripcion").val()

        if(nombre == "" || descripcion == "")
        {
            alert("Favor de insertar el nombre y descripcion de la categoria.")
            return;
        }
        $.ajax({
            type: "post",
            url:"./php/CategoriaCrear.php",
            data: {"Nombre": nombre, "Descripcion": descripcion},
            success: function(){
                alert("categoria creada!");
                cargarCategorias();
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error al crear categoria.");
            }
        });
    })

    $("#botonModificar").click(function(){
        var id = $("#idModificar").val()
        var nombre = $("#nombreModificar").val()
	    var descripcion = $("#descripcionModificar").val()

        if(nombre == "" || descripcion == "")
        {
            alert("Favor de insertar el nombre y descripcion de la categoria.")
            return;
        }
        
        $.ajax({
            type: "post",
            url:"./php/CategoriaModificar.php",
            data: {"ID_Categoria": id, "Nombre": nombre, "Descripcion": descripcion},
            success: function(){
                alert("categoria modificada!");
                cargarCategorias();
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error al crear categoria.");
            }
        });
    })
    cargarCategorias();

    function cargarCategorias()
    {
    $.ajax({
        type: "get",
        dataType:"json",
        url:"./php/CategoriaObtenerUsuario.php",
        data: null,
        success: function(data){
            $("#TablaCategorias tr.rowCategoria").remove();
            if(data == null)
            {
                alert("No tienes categorias");
                return;
            }
            console.log(data);
            for (var i = 0; i < data.length; i++)
            {
            console.log(data[i].ID_Categoria);
            console.log(data[i].Nombre);
            console.log(data[i].Descripcion);
            $('#TablaCategorias').append(
            '<tr class = "rowCategoria" id=' + data[i].ID_Categoria + '>' +
            '<td>' + data[i].Nombre +
            '</td><td>' + data[i].Descripcion +
            '</td><td>' + '<button class = "modificarCategoria" id =' + data[i].ID_Categoria + '> Modificar </button>' +
            '</td></tr>');
            }
        },
        error: function(err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error al intentar cargar categorias.");
        }
    })
}
});