document.addEventListener("DOMContentLoaded", function() {

    // BOTÓN
    const boton = document.getElementById("miboton");

    if (boton) {
        boton.addEventListener("click", function() {
            alert("Has presionado el BOTÓN");
        });
    }


    // FORMULARIO
    const formulario = document.getElementById("formulario-contacto");
    const mensajeEstado = document.getElementById("mensaje-estado");

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault();

            const nombre = document.getElementById("nombre").value;

            mensajeEstado.textContent =
            "Gracias por escribirnos, " + nombre + ". Tu mensaje fue enviado.";

            formulario.reset();
        });
    }


    // GALERÍA
    const imagenes = [
        "img/beso.jpg",
        "img/modernismo.jpg",
        "img/arte2.jpg"
    ];

    let indiceActual = 0;

    const imagenPrincipal = document.getElementById("imagenPrincipal");
    const btnAnterior = document.getElementById("btnAnterior");
    const btnSiguiente = document.getElementById("btnSiguiente");


    if(imagenPrincipal && btnAnterior && btnSiguiente){

        function mostrarImagen(indice){
            imagenPrincipal.src = imagenes[indice];
        }


        btnSiguiente.addEventListener("click", function(){
            indiceActual++;

            if(indiceActual >= imagenes.length){
                indiceActual = 0;
            }

            mostrarImagen(indiceActual);
        });


        btnAnterior.addEventListener("click", function(){
            indiceActual--;

            if(indiceActual < 0){
                indiceActual = imagenes.length - 1;
            }

            mostrarImagen(indiceActual);
        });


        mostrarImagen(indiceActual);
    }

});