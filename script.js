// CAFECITO
document.addEventListener("DOMContentLoaded", function() {
    const buttonCafecito = document.getElementById("cafecito");

    buttonCafecito.addEventListener("click", function() {
        // Crea un objeto de preferencia con los detalles del producto
        const preference = {
            items: [
                {
                    title: "Cafecito",
                    quantity: 1,
                    currency_id: "ARS", // Puedes cambiar la moneda según tu país
                    unit_price: 100 // El precio del café en centavos
                }
            ]
        };

        // Reemplaza con tu token de acceso de Mercado Pago
        const accessToken = "APP_USR-8069221756896494-101418-644c13cf04749a71a52a958eb13e8b68-59122948";

        // Realiza una llamada a la API de Mercado Pago para obtener la URL de pago
        
        curl 'https://api.mercadopago.com.test', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(preference)
        }
        .then(response => response.json())
        .then(data => {
            // Redirige al usuario a la página de pago de Mercado Pago
            window.location.href = data.init_point;
        })
        .catch(error => {
            // Maneja errores aquí
            alert("Hubo un error al procesar el pago.");
        });
    });
});

// index
// document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.getElementById("login-form");
//     const bienvenidaMensaje = document.getElementById("bienvenidaMensaje");

//     loginForm.addEventListener("submit", function(e) {
//         e.preventDefault();

//         const username = document.getElementById("new-username").value;
//         const password = document.getElementById("new-password").value;

        // Enviar la solicitud al servidor para verificar la autenticación
        fetch('verificar_usuario.php', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                bienvenidaMensaje.textContent = "Bienvenidas a Patagónicas en Tecnología, ${data.username}";
            } else {
                bienvenidaMensaje.textContent = "Por favor, regístrate para iniciar sesión.";
            }
        });
        console.log();
//     });
// });

// registro
document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registro-form");
    const bienvenidaMensaje = document.getElementById("bienvenidaMensaje");

    registroForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.querySelector('input[placeholder="Nombre"]').value;
        const email = document.querySelector('input[placeholder="email"]').value;
        const nombreUsuario = document.getElementById("crearUserName").value;
        const contraseña = document.getElementById("login-password").value;

        // Enviar los datos de registro al servidor
        fetch('registrar_usuario.php', {
            method: 'POST',
            body: JSON.stringify({ nombre, email, nombreUsuario, contraseña }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.valid) {
                bienvenidaMensaje.textContent = `¡Bienvenidas a Patagónicas en Tecnología, ${nombreUsuario}!`;
            } else {
                bienvenidaMensaje.textContent = "No se pudo completar el registro. Inténtalo de nuevo.";
            }
        });
    });
});


  


  // ANIMAR EL PARRAFO
  document.addEventListener("DOMContentLoaded", function() {
    
    const parrafo = document.querySelector(".parrafoH1");
  
   
    parrafo.classList.add("animado");
  });
  

// TACHAR LOS NO

// Espera a que la página se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene la lista de elementos
    const lista = document.getElementById("miLista");
    const elementos = lista.getElementsByTagName("li");
  
    // Función para tachar elementos con retraso
    function tacharElementos(index) {
        if (index < elementos.length) {
            const elemento = elementos[index];
            elemento.innerHTML = "<s>" + elemento.innerHTML + "</s";
            // Agregar un retraso de 500 milisegundos (0.5 segundos)
            setTimeout(function() {
                tacharElementos(index + 1);
            }, 3000);
        }
    }

    tacharElementos(0);
  });
 





