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

    }, numLetras * 100)

    // Se retorna una promesa para saber el tiempo finalizado de la animación.
    return new Promise((resolve, ) => setTimeout(resolve, numLetras * 100));
}

export default animarTexto;