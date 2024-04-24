const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let formIsValid = false;


form.addEventListener('submit', e => {
	console.log("Form Not Valid",formIsValid)
	if(formIsValid){
		return;
	}

	e.preventDefault();
	
	formIsValid = checkInputs();

	if(formIsValid){
		$("#submitBtn").trigger("click");
	}


});
function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No se puede dejar el usuario en blanco');
	} else {
		setSuccessFor(usuario);
	}
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else if (!isValidPassword(passwordValue)) {
		setErrorFor(password, 'La contraseña no cumple con los requisitos');
	  } else {
		setSuccessFor(password);
	}
	function isValidPassword(password) {
		// validar longitud
		if (password.length < 8) {
		  return false;
		}	  
		// validar mayúscula
		if (!/[A-Z]/.test(password)) {
		  return false;
		}
		// validar minúscula
		if (!/[a-z]/.test(password)) {
		  return false;
		}
		// validar caracter especial
		if (!/[!@#$%^&*()_+~-]/.test(password)) {
		  return false;
		}
		return true;
	  }
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 no debe ngresar en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords no coinciden');
	} else{
		setSuccessFor(password2);
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
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//----imagen 
/*$("#imagen-perfil").ready(function () {
    $("#imagen-perfil-fake").css({"border": "0.1rem solid red"});
    banderaImagen = false;
});*/
/*$("#imagen-perfil").change(function () {
    const archivo = $(this).get(0).files[0];
    var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
    if (!allowedExtensions.exec(archivo.name)) {
        alert("Extension de imagen no permitida");
        $("#imagen-perfil-fake").css({"border": "0.1rem solid red"});
        $("#imagen-perfil-prev").attr("src", "");
        banderaImagen = false;
        return;
    }
    if (archivo == undefined || archivo == null) {
        $("#imagen-perfil-prev").attr("src", "");
        $("#imagen-perfil-fake").css({"border": "0.1rem solid red"});
        banderaImagen = false;
        return;
    }
    const objectURL = URL.createObjectURL(archivo);
    $("#imagen-perfil-prev").attr("src", objectURL);
    $("#imagen-perfil-fake").css({"border": "0.1rem solid lightgreen"});
    banderaImagen = true;
});*/