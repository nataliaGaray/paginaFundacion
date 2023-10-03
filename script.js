// SALUDO DE BIENVENIDA, SOLO EN indexedDB, SOLO UNA VEZ
function saludar(nombre) {
  alert("Hola " + nombre + ", bienvenida a Mujeres Patagónicas en Tecnología.");
}
function procesarEntradaUsuaria(callback) {
  let nombre = prompt("Por favor, ingresa tu nombre.");
  callback(nombre);
}
function mostrarSaludoUnaVez() {
  if (!sessionStorage.getItem("saludoMostrado")) {
    procesarEntradaUsuaria(saludar);

   
    sessionStorage.setItem("saludoMostrado", "true");
  }
}
if (window.location.href.includes("index.html")) {
  mostrarSaludoUnaVez();
}
// QUIERO RECIBIR NOVEDADES
document.addEventListener("DOMContentLoaded", function () {
  //creamos un nuevo elemento para agregar a la base de datos
  const btnNovedades = document.getElementById("btnNovedades");
  btnNovedades.addEventListener("click", function () {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const email = prompt("Por favor, ingresa tu correo electrónico:");
    if (nombre && email) {
      const nuevoRegistro = {
        nombre: nombre,
        email: email,
      };
      const baseDeDatosJSON = JSON.stringify(nuevoRegistro);
      //creamos la base de datos con un JSON de usuarios
     localStorage.setItem('usuario',baseDeDatosJSON)
  
      console.log(baseDeDatosJSON);
      alert("Gracias por suscribirte a nuestras novedades.");
    } else {
      alert("Debes proporcionar un nombre y un correo electrónico válidos.");
    }});
});
// El usuario puede ver informacion que tenemos en nuestra base de datos
document.addEventListener("DOMContentLoaded", function () {
  const btnMostrar = document.getElementById("btnMostrar");
  btnMostrar.addEventListener("click", function () {
   usuario=localStorage.getItem('usuario')
 
    alert(usuario)
   
  });
});




  
  



