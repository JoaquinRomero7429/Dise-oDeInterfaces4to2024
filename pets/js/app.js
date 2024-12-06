// Espera a que la estructura de la página esté completamente cargada antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {

    // Obtiene el campo de búsqueda utilizando su ID del documento
    const inputBusqueda = document.getElementById('search-input');

    // Selecciona todos los botones que están dentro del contenedor con la clase "vet-locations"
    const botonesVet = document.querySelectorAll('.vet-locations button');

    // Agrega un "escuchador" para detectar cuando el usuario escribe algo en el campo de búsqueda
    inputBusqueda.addEventListener('input', function() {
        // Llama a la función que filtra los botones según lo que escribe el usuario
        filtroVetLocalidad();
    });

    // Esta función se encarga de mostrar , ocultar los botones según lo que se escribe en el campo de búsqueda
    function filtroVetLocalidad() {
        // Toma el texto que escribió el usuario y lo convierte a minúsculas
        const texto = inputBusqueda.value.toLowerCase();

        // Recorre cada botón de la lista de botones obtenida
        botonesVet.forEach(boton => {
            // Obtiene el valor del atributo "data-localidad" del botón y lo convierte a minúsculas
            const localidad = boton.getAttribute('data-localidad').toLowerCase();

            // Comprueba si el texto ingresado coincide con el atributo "data-localidad"
            if (localidad.includes(texto)) {
                // Si coincide, el botón se muestra
                boton.style.display = '';
            } else {
                // Si no coincide, el botón se oculta
                boton.style.display = 'none';
            }
        });
    }
});
