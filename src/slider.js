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
}

const mueve = (e) =>{
    if(!clickPresionado) {
        return;
    }
    const espaciado = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;

    slider.scrollLeft = scrollLeft - distanciaRecorrida;
}

const suelta = (e) =>{
    clickPresionado = false;
}

slider.addEventListener('mousedown', presiona);
slider.addEventListener('mousemove', mueve);
slider.addEventListener('mouseup', suelta);