const galeria = document.getElementById('trabajos');

// Creación del objeto oberser
const observer = new IntersectionObserver((entries) => {
    // Si la intrada se ve en pantalla (true)
    if(entries[0].isIntersecting) {
        // Obtener todos los contenedores de imagenes.
        const trabajos = galeria.querySelectorAll('.trabajos__imagenes a');

        // Se hace la animación de aparación por cada elemento de trabajo que hay.
        trabajos.forEach((trabajo, index) => {
            setTimeout(() => {
                trabajo.classList.add('trabajos__trabajo--visible');
            }, 200 * index);
        });
    }
    }, {
        // Cuando la mitad de la galeria se alcanza a ver en la pantalla.
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5,
    });

// Observa la pantalla.
observer.observe(galeria);