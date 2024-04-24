document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const registroExitosoMessage = document.getElementById("registro-exitoso");
    const alertMessage = document.getElementById("alert-message");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Detén el envío del formulario por defecto

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const fotoNameInput = document.getElementById("foto-name");
        const emailInput = document.getElementById("email");
        const roleInput = document.getElementById("role");
        const nombreInput = document.getElementById("name");
        const birthdateInput = document.getElementById("birthdate");
        const genderInputs = document.querySelectorAll('input[name="gender"]');

        const username = usernameInput.value;
        const password = passwordInput.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const foto = fotoNameInput.value;
        const email = emailInput.value;
        const role = roleInput.value;
        const nombre = nombreInput.value;
        const birthdate = birthdateInput.value;
        const gender = genderInputs.value;

        let valid = true;

        if (username.length < 3) {
            alert("El nombre de usuario debe tener al menos 3 caracteres.");
            valid = false;
        }

        if (!passwordPattern.test(password)) {
            alert("La contraseña debe tener al menos 8 caracteres y contener al menos una mayúscula, una minúscula, un número y un carácter especial.");
            valid = false;
        }

        if (!valid) {
            // Si hay errores de validación, no se envía el formulario
            event.preventDefault();
        } else {
            // Si el formulario es válido, puedes enviar los datos
            const formData = new FormData(registrationForm);
            console.log(formData)
            fetch("php/UsuarioRegistrar.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error); // Mostrar alerta de error
                } else if (data.message) {
                    alert(data.message); // Mostrar alerta de éxito
                }
            })
            .catch(error => {
                console.error("Error en la solicitud:", error);
            });
        }
    });
});