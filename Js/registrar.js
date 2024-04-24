$(document).ready(function(){

    $('#botonSubir').click(function(){
        var usuario = $('#username').val();
        var nombre = $('#name').val();
        var contrasena = $('#password').val();
        var correo = $('#email').val();
        var fecha = $('#birthdate').val();
        var rol = $('#role').val();
        var sex = $('#sex').val();
        var privacy = $('#privacy').val();
        var imagen = $('#foto')[0].files[0];
        console.log("Usuario: " + usuario);
        console.log("Nom: " + nombre);
        console.log("Contra: " + contrasena);
        console.log("Correo: " + correo);
        console.log("Fecha: " + fecha);
        console.log("sexo: " + sex);
        console.log("rol: " + rol);
        console.log("imagen: " + imagen);
        if(usuario.length < 3){
            alert("Usuario necesita ser al menos 3 letras de largo!");
            return;
        }
        if(nombre == "")
        {
            alert("Llene el campo de nombre.");
            return;
        }
        regexPattern = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/;
        if(contrasena.match(regexPattern))
        {
            console.log("Contrasena aprobada.");
        }
        else{
            alert("Contrasena necesita tener al menos un simbolo, numero, una mayuscula y ser al menos 8 caracteres de largo.");
            return;
        }
        if(!isEmail(correo))
        {
            alert("Se nececita un correo real.");
            return;
        }
        if(fecha == "")
        {
            alert("Inserte su fecha de nacimiento.");
            return;
        }
        if(imagen == "")
        {
            alert("Inserte link de imagen deseada.");
            return;
        }

        var reader = new FileReader();
        reader.onload = function(event){
            //var imagenBytes = new Uint8Array(event.target.result);
            var imagenBase64 = event.target.result;

            $.ajax({
                type: "post",
                url:"./php/UsuarioRegistrar.php",
                data: {"username": usuario, "name": nombre, "password": contrasena, 
                "email": correo, "birthdate": fecha, "gender": sex,
                "role": rol, "foto": imagenBase64, "privacy": privacy},
                success: function(){
                    alert("Usuario creado!");
                    window.location.href='login.html';
                },
                error: function(err) {
                    console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                    alert("Error al crear usuario, intente de nuevo.");
                }
            });

        }
        reader.readAsDataURL(imagen);
        
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }

});