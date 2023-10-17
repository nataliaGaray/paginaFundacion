 // ANIMAR EL PARRAFO
 document.addEventListener("DOMContentLoaded", function() {
    
    const parrafo = document.querySelector(".parrafoH1");
  
   
    parrafo.classList.add("animado");
  }); // Espera a que el contenido de la página esté completamente cargado.
window.addEventListener("load", function() {
    // Selecciona el elemento h1.
    const h1Element = document.querySelector(".h1Paginas");

    // Inicialmente, establece la opacidad en 0 para ocultar el elemento.
    h1Element.style.opacity = 0;

    // Realiza la animación de desvanecimiento (fade-in).
    let opacity = 0;
    const animationInterval = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(animationInterval); // Detén la animación cuando la opacidad alcanza 1.
        } else {
            opacity += 0.02; // Incrementa la opacidad gradualmente.
            h1Element.style.opacity = opacity;
        }
    }, 20); // Cambia el valor de 20 para ajustar la velocidad de la animación.
});

// inicioSesion
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("new-username").value; // Cambiado de crearUserName a new-username
    const password = document.getElementById("new-password").value;
    const message = document.getElementById("message");
    
    // Obtener la base de datos simulada (debe coincidir con la de Registro.html)
    const database = JSON.parse(localStorage.getItem("database")) || [];
    
    const user = database.find(user => user.username === username && user.password === password);
    
    if (user) {
        message.innerText = "¡Bienvenida, " + user.nombre + "!"; // Agregado el nombre de la usuaria
        message.style.color = "blanco";
    } else {
        message.innerText = "Por favor, regístrate.";
        message.style.color = "blanco";
    }
    
    message.style.display = "block";
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
 
 // ANIMAR EL PARRAFO
 document.addEventListener("DOMContentLoaded", function() {
    
    const parrafo = document.querySelector(".parrafoH1");
  
   
    parrafo.classList.add("animado");
  }); // Espera a que el contenido de la página esté completamente cargado.
window.addEventListener("load", function() {
    // Selecciona el elemento h1.
    const h1Element = document.querySelector(".h1Paginas");

    // Inicialmente, establece la opacidad en 0 para ocultar el elemento.
    h1Element.style.opacity = 0;

    // Realiza la animación de desvanecimiento (fade-in).
    let opacity = 0;
    const animationInterval = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(animationInterval); // Detén la animación cuando la opacidad alcanza 1.
        } else {
            opacity += 0.02; // Incrementa la opacidad gradualmente.
            h1Element.style.opacity = opacity;
        }
    }, 20); // Cambia el valor de 20 para ajustar la velocidad de la animación.
});

document.getElementById("forgot-password-button").addEventListener("click", function () {
    // Pedir al usuario su dirección de correo electrónico
    const email = prompt("Por favor, ingrese su dirección de correo electrónico:");
  
    if (!email) {
      return; // El usuario canceló la operación
    }
  
    // Recuperar la base de datos de usuarios almacenada en el localStorage
    const database = JSON.parse(localStorage.getItem("database"));
  
    // Buscar la usuaria en la base de datos que coincida con el correo electrónico ingresado
    const user = database.find(usuario => usuario.email === email);
  
    if (user) {
      // Si se encontró la usuaria, mostrar sus datos
    alert(`Sus datos de registro son:\nNombre: ${user.nombre}\nUsername: ${user.username} \nPassword ${user.password}`);
    } else {
      // Si no se encontró la usuaria, mostrar un mensaje de error
      alert("No se encontraron datos de registro para el correo electrónico proporcionado.");
    }
  });
  
  