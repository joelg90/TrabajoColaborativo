
// Seleccionar el botón de favoritos
const boton = document.getElementById("favorito");

// Detectar cuando el usuario hace clic
boton.addEventListener("click", function() {

    // Cambiar el texto del botón
    if (boton.textContent === "Agregar a favoritos") {
        boton.textContent = "¡Receta guardada!";
    } else {
        boton.textContent = "Agregar a favoritos";
    }

});