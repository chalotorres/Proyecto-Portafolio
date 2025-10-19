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