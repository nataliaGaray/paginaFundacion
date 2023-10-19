       document.getElementById("login-form").addEventListener("submit", function(e) {
            e.preventDefault();

            const username = document.getElementById("new-username").value;
            const password = document.getElementById("new-password").value;
            const message = document.getElementById("message");

            const database = JSON.parse(localStorage.getItem("database")) || [];

            const user = database.find(user => user.username === username && user.password === password);

            if (user) {
                message.innerText = "¡Bienvenida, " + user.nombre + "!";
                message.style.color = "black";
            } else {
                message.innerText = "Por favor, regístrate.";
                message.style.color = "black";
            }

            message.style.display = "block";
        });

               // Redirigir a la página de registro cuando se hace clic en el botón "Regístrate"
        document.getElementById("register-button").addEventListener("click", function() {
            window.location.href = "/paginas/Registro.html";
        });
    document.getElementById("login-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("new-username").value;
        const password = document.getElementById("new-password").value;
        const message = document.getElementById("message");

        const database = JSON.parse(localStorage.getItem("database")) || [];

        const user = database.find(user => user.username === username);

        if (user) {
            if (user.password === password) {
                message.innerText = "¡Bienvenida, " + user.nombre + "!";
                message.style.color = "black";
            } else {
                message.innerText = "Por favor, ingrese la contraseña correcta.";
                message.style.color = "black";
            }
        } else {
            message.innerText = "Por favor, regístrate.";
            message.style.color = "black";
        }

        message.style.display = "block";
    });


    // Redirigir a la página de registro cuando se hace clic en el botón "Regístrate"
    document.getElementById("register-button").addEventListener("click", function() {
        window.location.href = "/paginas/Registro.html";
    });

    document.getElementById("forgot-password-button").addEventListener("click", function() {
        const email = prompt("Por favor, ingrese su dirección de correo electrónico:");
    
        if (!email) {
            return; // El usuario canceló la operación
        }
    
        const database = JSON.parse(localStorage.getItem("database")) || [];
    
        const user = database.find(usuario => usuario.email === email);
    
        if (user) {
            // Se encontró el usuario, muestra la contraseña y el nombre de usuaria
            alert(`Nombre de Usuaria: ${user.username}\nSu contraseña es: ${user.password}`);
        } else {
            // No se encontró el usuario, muestra un mensaje de error
            alert("No se encontraron datos de registro para el correo electrónico proporcionado.");
        }
    });
    

    

