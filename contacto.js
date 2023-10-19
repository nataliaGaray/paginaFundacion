// Base de datos simulada
const baseDeDatos = [];

function guardarDatos() {
    // Obtener los valores ingresados por la usuaria
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    // Verificar si se completaron todos los campos
    if (nombre && apellido && correo && mensaje) {
        // Obtener el tipo de contacto seleccionado
        const tipoContacto = document.querySelector('input[name="contact_type"]:checked').value;

        // Crear un objeto con los datos
        const nuevoRegistro = {
            tipoContacto,
            nombre,
            apellido,
            correo,
            mensaje,
        };

        // Agregar el nuevo registro a la base de datos
        baseDeDatos.push(nuevoRegistro);

        // Mostrar un mensaje en la consola
        console.log('Datos registrados:', nuevoRegistro);

        // Mostrar un mensaje de confirmación
        alert('Pronto vas a recibir noticias nuestras en tu email.');

        // Limpiar los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('mensaje').value = '';
    } else {
        // Mostrar un mensaje de error si algún campo está vacío
        alert('Por favor, completa todos los campos del formulario.');
    }
}

