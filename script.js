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


  
  