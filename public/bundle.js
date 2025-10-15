'use strict';

const animarTexto = (texto) => {
    const numLetras = texto.dataset.texto.length;

    // activar el cursor cuando comienza la animación
    const cursor = texto.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');

    // Se agrega al DOM cada letra de la palabra con 100 ms de separación
    for(let i = 0; i < numLetras; i++) {
        setTimeout(() => {
            const letra = document.createElement('span');
            letra.append(texto.dataset.texto[i]);
            texto.append(letra);
        }, 100 * i);
    }

    setTimeout(() => {
        // Se obtiene ambos cursores
        const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')];
        
        // Se obtiene el index del cursor actual
        const indexCursorActual = cursores.indexOf(cursor);

        // Se comprueba que el cursor actual no sea el ultimo.
        if(indexCursorActual < cursores.length - 1) {
            cursor.classList.remove('hero__cursor--visible');
        } else {
            cursor.classList.add('hero__cursor--active');
        }

    }, numLetras * 100);

    // Se retorna una promesa para saber el tiempo finalizado de la animación.
    return new Promise((resolve, ) => setTimeout(resolve, numLetras * 100));
};

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

window.addEventListener('load', async () => {
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
