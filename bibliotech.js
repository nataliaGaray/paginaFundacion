// Add an event listener to the "TRADUCIR TEXTO" button
document.getElementById("traducirTextoButton").addEventListener("click", async () => {
    try {
      const textToTranslate = document.getElementById("textoParaTraducir").value;
      const selectedLanguage = document.getElementById("idiomaDestino").value;
  
      // Define the URL for the Google Translate API
      const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '66c9d13d3emsh23a588b745a1b1dp14db59jsne011d01182de',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        }
        ,
        body: new URLSearchParams({
          q: textToTranslate,
          source: 'en', // Source language (English in this example)
          target: selectedLanguage, // Target language (selected language)
        }),
      };
  
      // Send the translation request to the API
      const response = await fetch(url, options);
      const result = await response.json();
  
      // Display the translated text in the "resultado" div
      const translatedText = result.data.translations[0].translatedText;
      document.getElementById("resultado").textContent = translatedText;
    } catch (error) {
      console.error(error);
    }
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