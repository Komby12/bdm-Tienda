$(document).ready(function(){
    $("#botonSubir").click(function(){
        var usuario = $("#Usuario").val();
	    var nombre = $("#Nombre").val();
        var contrasena = $("#Contrasena").val();
        var contrasena2 = $("#Contrasena2").val();
	    var imagen = $("#Imagen").val();

        if(usuario == "" || nombre == "" || contrasena == "" || imagen == "")
        {
            alert("Debe llenar todos los campos.");
            return;
        }

        if(contrasena != contrasena2)
        {
            alert("Las contrasenas tienen que ser iguales.");
            return;
        }
        console.log(usuario);
        console.log(nombre);
        console.log(contrasena);
        console.log(imagen);

        $.ajax({
            type: "post",
            url:"./php/UsuarioModificar.php",
            data: {"Usuario": usuario, "Nombre": nombre, "Contrasena": contrasena,  "Imagen": imagen},
            success: function(){
                alert(" Modificado!");
                cargarUsuario();
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error al modificar usuario.");
            }
        });
    });

    cargarUsuario();

    function cargarUsuario()
    {
        $.ajax({
            type: "get",
            dataType:"json",
            url:"./php/UsuarioPerfil.php",
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
                console.log(data[i].Nombre);

                $("#Usuario").val(data[i].Usuario);
                $("#Nombre").val(data[i].Nombre);
                $("#Contrasena").val(data[i].Contrasena);
                $("#Imagen").val(data[i].Imagen);
                }
            },
            error: function(err) {
                console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                alert("Error al intentar cargar su carrito.");
            }
        })
    }
});