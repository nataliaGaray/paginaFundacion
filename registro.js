// registro
document.getElementById("registro-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const crearUserName = document.getElementById("crearUserName").value;
    const contrasena = document.getElementById("contrasena").value;
    const repetirContrasena = document.getElementById("repetirContrasena").value;
    
    // Validar si las contraseñas coinciden
    if (contrasena !== repetirContrasena) {
        alert("Las contraseñas no coinciden");
        return;
    }
    
    // Crear un objeto para la nueva usuaria
    const nuevaUsuaria = {
        nombre: nombre,
        email: email,
        username: crearUserName,
        password: contrasena
    };
    
    // Obtener la base de datos simulada (debe coincidir con la de index.html)
    let database = JSON.parse(localStorage.getItem("database")) || [];
    
    // Verificar si el nombre de usuaria ya existe
    const usuarioExistente = database.find(usuario => usuario.username === crearUserName);
    
    if (usuarioExistente) {
        alert("El nombre de usuaria ya está en uso. Por favor, elige otro.");
        return;
    }
    
    // Agregar la nueva usuaria a la base de datos JSON
    database.push(nuevaUsuaria);
    localStorage.setItem("database", JSON.stringify(database));
    
    alert("¡bienvenida a Patagónicas en Tec!");
    window.location.href = "../index.html"; // Redirige al índice.
});
