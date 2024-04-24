$(document).ready(function(){

const form = document.getElementById('form');
const usuario = document.getElementById('username');
const password = document.getElementById('password');


// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

$("#botonSubir").click(function(){
	checkInputs();
	var usuario = $("#username").val()
	var contrasena = $("#password").val()

	$.ajax({
        type: "post",
        dataType:"json",
        url:"./php/UsuarioLogin.php",
        data: {"Usuario": usuario, "Contrasena": contrasena},
        success: function(data){
            console.log(data);
			if(data.length > 0)
			{
			for (var i = 0; i < data.length; i++)
            {
				console.log(data[i].Usuario);
				window.location.href='principal.html';
            }
			}
			else{
				alert("Usuario o contrasena erroneos.");
			}
            
		},
		error: function(err) {
			console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
			alert("Usuario o contrasena erroneos, intente de nuevo.");
		}
	});
	console.log("temrinao");
})

function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value.trim();
		const passwordValue = password.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No se puede dejar el usuario en blanco');
	} else {
		setSuccessFor(usuario);
	}

   
	
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}
	
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


});