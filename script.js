function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "USER" && password === "PASS") {
        alert("¡Inicio de sesión exitoso!");
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function sendEmail() {
    // Aquí puedes integrar el servicio EmailJS
    alert("Implementar API para enviar correos.");
}

function getRandomImage() {
    fetch('https://picsum.photos/200/300')
        .then(response => {
            document.getElementById('output').innerHTML = `<img src="${response.url}" alt="Imagen aleatoria">`;
        })
        .catch(err => console.error(err));
}

function getCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerHTML = `<img src="${data[0].url}" alt="Imagen de gato">`;
        })
        .catch(err => console.error(err));
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Simulación de verificación de contraseña
    const correctPassword = "123456"; // Cambia la contraseña según lo que necesites

    if (password === correctPassword) {
        messageDiv.textContent = "Ingreso correcto!";
        messageDiv.style.color = "green";

        // Aquí deberías enviar los datos al backend para enviar el correo
        sendEmail(username);
        
        // Redirigir a la página principal
        setTimeout(() => {
            window.location.href = "homepage.html"; // Asegúrate de crear esta página
        }, 2000);
    } else {
        messageDiv.textContent = "Contraseña incorrecta.";
        messageDiv.style.color = "red";
    }
});

function sendEmail(username) {
    // Aquí puedes hacer una petición AJAX a tu backend
    console.log(`Se ha enviado un correo a: admin@tuempresa.com informando que ${username} ha ingresado.`);
    // Implementa la lógica de envío de correo en tu backend
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctPassword = '1234'; // La contraseña correcta

    const messageElement = document.getElementById('message');

    // Comprobamos si la contraseña es correcta
    if (password === correctPassword) {
        messageElement.textContent = 'Contraseña correcta. ¡Bienvenido!';
        messageElement.style.color = 'green'; // Cambia el color del mensaje a verde
    } else {
        messageElement.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
        messageElement.style.color = 'red'; // Cambia el color del mensaje a rojo
    }
});
function calcular(tipo) {
    let cantidad, precio, resultado;

    if (tipo === 'total') {
        cantidad = prompt("Ingrese la cantidad:");
        precio = prompt("Ingrese el precio por unidad:");
        resultado = cantidad * precio;
        alert("El total de producto es: " + resultado);
    } else if (tipo === 'porcentaje30') {
        precio = prompt("Ingrese el precio:");
        resultado = precio * 0.30;
        alert("El 30% de precio es: " + resultado);
    } else if (tipo === 'descuento') {
        precio = prompt("Ingrese el precio:");
        resultado = precio * 0.25;
        alert("El 25% de descuento es: " + resultado);
    }
}
