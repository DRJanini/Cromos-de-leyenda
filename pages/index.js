document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento <div> donde se mostrará la imagen de fondo
    var backgroundContainer = document.getElementById("background-container");

    // Crear un elemento <img> para cargar la imagen
    var image = new Image();
    image.src = "image.png"; // Ruta de la imagen

    // Cuando la imagen se cargue correctamente
    image.onload = function() {
        // Establecer la imagen como fondo del contenedor
        backgroundContainer.style.backgroundImage = "url('" + image.src + "')";
        backgroundContainer.style.backgroundSize = "cover";
        backgroundContainer.style.backgroundPosition = "center";
    };

    // En caso de que haya un error al cargar la imagen
    image.onerror = function() {
        console.error("Error al cargar la imagen");
    };
});
