
window.addEventListener("load", function() {
    const h1Element = document.querySelector(".h1Paginas");
    h1Element.style.opacity = 0;
    let opacity = 0;
    const animationInterval = setInterval(function() {
       if (opacity >= 4) {
                clearInterval(animationInterval); // Detén la animación cuando la opacidad alcanza 1.
       } else {
                opacity += 0.02;
            }
        }, 20);
    });
    

// ANIMAR EL PARRAFO
 document.addEventListener("DOMContentLoaded", function() {
const parrafo = document.querySelector(".parrafoH1");
parrafo.classList.add("animado");
  }); 
  



// TACHAR LOS NO


document.addEventListener("DOMContentLoaded", function() {

    const lista = document.getElementById("miLista");
    const elementos = lista.getElementsByTagName("li");

    function tacharElementos(index) {
        if (index < elementos.length) {
            const elemento = elementos[index];
            elemento.innerHTML = "<s>" + elemento.innerHTML + "</s";
            setTimeout(function() {
                tacharElementos(index + 1);
            }, 4000);
        }
    }

    tacharElementos(0);
  });


  
  