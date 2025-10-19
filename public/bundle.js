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

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');

const datos = [
    {
        id: '1',
        titulo: 'Trabajo #1',
        texto: 'Aliqua sint non minim commodo nulla duis aute. Cupidatat proident officia ut fugiat eu cupidatat nostrud esse elit veniam nisi ea esse. Voluptate et sunt irure id pariatur et Lorem adipisicing sint tempor occaecat.',
        fecha: '1 Enero 2025',
    },
    {
        id: '2',
        titulo: 'Trabajo #2',
        texto: 'Aliqua sint non minim commodo nulla duis aute. Cupidatat proident officia ut fugiat eu cupidatat nostrud esse elit veniam nisi ea esse. Voluptate et sunt irure id pariatur et Lorem adipisicing sint tempor occaecat.',
        fecha: '1 Enero 2025',
    },
    {
        id: '3',
        titulo: 'Trabajo #3',
        texto: 'Aliqua sint non minim commodo nulla duis aute. Cupidatat proident officia ut fugiat eu cupidatat nostrud esse elit veniam nisi ea esse. Voluptate et sunt irure id pariatur et Lorem adipisicing sint tempor occaecat.',
        fecha: '1 Enero 2025',
    },
    {
        id: '4',
        titulo: 'Trabajo #4',
        texto: 'Aliqua sint non minim commodo nulla duis aute. Cupidatat proident officia ut fugiat eu cupidatat nostrud esse elit veniam nisi ea esse. Voluptate et sunt irure id pariatur et Lorem adipisicing sint tempor occaecat.',
        fecha: '1 Enero 2025',
    },
    {
        id: '5',
        titulo: 'Trabajo #5',
        texto: 'Aliqua sint non minim commodo nulla duis aute. Cupidatat proident officia ut fugiat eu cupidatat nostrud esse elit veniam nisi ea esse. Voluptate et sunt irure id pariatur et Lorem adipisicing sint tempor occaecat.',
        fecha: '1 Enero 2025',
    },
    {
        id: '6',
        titulo: 'Trabajo #6',
        texto: 'Aliqua sint non minim commodo nulla duis aute. Cupidatat proident officia ut fugiat eu cupidatat nostrud esse elit veniam nisi ea esse. Voluptate et sunt irure id pariatur et Lorem adipisicing sint tempor occaecat.',
        fecha: '1 Enero 2025',
    },
];

// Event listener para abrir el trabajo clickeado.
trabajos.addEventListener('click', (e) => {
    e.preventDefault();

    // Se seleccionó un trabajo
    const trabajoSeleccionado = e.target.closest('.trabajos__trabajo');
    
    if(trabajoSeleccionado) {
        // Se obtiene el id del trabajo seleccionado
        const id = trabajoSeleccionado.dataset.id;
        
        const trabajoFiltrado = datos.filter((trabajo) => {
            if(trabajo.id === id) {
                return trabajo;
            }
        });
        const {titulo, fecha, texto} = trabajoFiltrado[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = titulo;
        ventanaTrabajos.querySelector('.ventana__fecha').innerText = fecha;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoSeleccionado.querySelector('img').src;

        ventanaTrabajos.classList.add('ventana--active');
    }
});

ventanaTrabajos.querySelector('button[data-action=cerrar-ventana]').addEventListener('click', (e) => {
    e.preventDefault();
    ventanaTrabajos.classList.remove('ventana--active');
});

// Event Listener para cerrar la ventana de trabajo que se seleccionó.
ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.matches('.ventana__overlay')){
        ventanaTrabajos.classList.remove('ventana--active');
    }
});

const slider = document.getElementById('slider');
// const sliderScroll = document.querySelector('.comentarios__slider');
// sliderScroll.style.setProperty('overflow-x', 'hidden', 'important');

let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;

const presiona = (e) =>{
    clickPresionado = true;
    
    // e.pageX - Coordenada horizontal del evento. Indica en qué punto del documento se hizo clic.
    // e.offsetLeft - Distancia en píxeles entre el borde izquierdo del elemento y el borde izquierdo de su contenedor padre.
    // e.scrollLeft - Cantidad de píxeles que un elemento ha sido desplazado horizontalmente (scroll) desde su borde izquierdo.
    coordenadaInicial = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

const mueve = (e) =>{
    if(!clickPresionado) {
        return;
    }
    const espaciado = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;

    slider.scrollLeft = scrollLeft - distanciaRecorrida;
};

const suelta = (e) =>{
    clickPresionado = false;
};

slider.addEventListener('mousedown', presiona);
slider.addEventListener('mousemove', mueve);
slider.addEventListener('mouseup', suelta);

window.addEventListener('load', async () => {
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
