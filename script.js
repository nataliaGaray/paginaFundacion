 function saludar(nombre) {
     alert("Hola " + nombre + ", bienvenida a Mujeres Patagónicas en Tecnología.");
 }

 function procesarEntradaUsuaria(callback) {
     let nombre = prompt("Por favor, ingresá tu nombre.");
     callback(nombre);
}
procesarEntradaUsuaria(saludar);





