document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al formulario y al elemento donde mostrarás los resultados.
    var formulario = document.getElementById("miFormulario");
    var resultados = document.getElementById("resultados");

    // Agrega un event listener para el evento "submit" del formulario.
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada.

        // Captura los valores de los campos de nombre y correo electrónico.
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var asunto = document.getElementById("asunto").value;
        var mensaje = document.getElementById("mensaje").value;

        // Haz algo con los datos capturados, como mostrarlos en la página.
        resultados.innerHTML = "Nombre: " + nombre + "<br>Correo Electrónico: " + email + "<br>Asunto: " + asunto + "<br>Mensaje: " + mensaje;

        console.log("Nombre: " + nombre + "\nCorreo Electrónico: " + email + "\nAsunto: " + asunto + "\nMensaje: " + mensaje);

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("mensaje").value = "";

        // También puedes enviar los datos a un servidor utilizando AJAX o realizar otras acciones según tus necesidades.
    });
});
