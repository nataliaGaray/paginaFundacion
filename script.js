 function saludar(nombre) {
     alert("Hola " + nombre + ", bienvenida a Mujeres Patagónicas en Tecnología.");
 }

 function procesarEntradaUsuaria(callback) {
     let nombre = prompt("Por favor, ingresá tu nombre.");
     callback(nombre);
}
procesarEntradaUsuaria(saludar);

  // RECOPILACION DE CORREOS ELECTRONICOS DE QUIENES QUIERAN RECIBIR NOVEDADES

document.addEventListener("DOMContentLoaded", function() {
  const btnNovedades = document.getElementById("btnNovedades");

  btnNovedades.addEventListener("click", function() {
    const nombre = prompt("Ingresa tu nombre");
    const email = prompt("Ingresá tu e-mail");

    if (nombre && email) {
      alert(`Gracias, ${nombre}, vas a recibir nuestras novedades al mail ${email}.`);
    }
  });
    alert(`Gracias, ${nombre}, te has suscrito con éxito a nuestras novedades con la dirección de correo electrónico ${email}.`);

    // Limpia el formulario después de enviarlo
    document.getElementById("formulario").reset();
  });

CERTIFICADO

    const certificateForm = document.getElementById("certificateForm");
    const certificateContainer = document.getElementById("certificateContainer");
    const certificateCanvas = document.getElementById("certificateCanvas");
    const downloadLink = document.getElementById("downloadLink");

    certificateForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const courseDate = document.getElementById("courseDate").value;

      // Aquí debes agregar la lógica para generar el certificado personalizado.
      // Puedes usar la biblioteca Canvas de HTML5 para dibujar el certificado con los datos proporcionados.
      const ctx = certificateCanvas.getContext("2d");

      // Dibuja la imagen de fondo (reemplaza con tu propia imagen).
      const backgroundImage = new Image();
      backgroundImage.src = "certificate-background.jpg"; // Cambia la URL de la imagen
      backgroundImage.onload = function () {
        ctx.drawImage(backgroundImage, 0, 0, certificateCanvas.width, certificateCanvas.height);

        // Agrega el nombre del usuario y la fecha al certificado.
        ctx.fillStyle = "black";
        ctx.font = "bold 30px Arial";
        ctx.fillText(`Nombre: ${name}`, 100, 300);
        ctx.fillText(`Fecha de Finalización: ${courseDate}`, 100, 350);

        // Muestra el certificado y el enlace de descarga.
        certificateContainer.style.display = "block";
        downloadLink.style.display = "block";
        downloadLink.href = certificateCanvas.toDataURL("image/png");
        downloadLink.download = "certificado.png"; // Puedes cambiar el nombre del archivo
              };
    });
  
    




  
  



