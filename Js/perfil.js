$(document).ready(function () {
    // $("#Imagen").val();
    // $("#Usuario").val();
    // $("#Email").val();

    $.ajax({
        type: "get",
        dataType: "json",
        url: "./php/UsuarioPerfil.php",
        data: null,
        success: function (data) {
            $("#TablaCategorias tr.rowCategoria").remove();
            if (data == null) {
                alert("No tienes categorias");
                return;
            }
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].Nombre);
                console.log(data[i].Imagen);

                $("#Usuario").text(data[i].Usuario);
                $("#Email").text(data[i].Email);
                //$("#Contrasena").val(data[i].Contrasena);
                $("#Imagen").attr("src", data[i].Imagen);
                //$("#Imagen2").attr("src", data[i].Imagen); 
            }
        },
        error: function (err) {
            console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
            alert("Error al intentar cargar su perfil.");
        }
    })
});