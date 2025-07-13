const agregarCaja = () =>{

    /**
     * 1. crear el elemento
     * createElement - recibe como parámetro una cadena de texto con la etiqueta que queremos crear
     * 
     */

    const nuevaCaja = document.createElement('div');

    /**
     * 2. agregar texto y atributos
     * 
     */

    nuevaCaja.innerText = 'Nueva Caja';
    //nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    /**
     * 3. agregar el elemento al DOM
     * 
     */

    const contenedor = document.getElementById('contenedor1');

    //appendChild() - agrega el elemento al final

    //contenedor.appendChild(nuevaCaja);

    /*
    .insertAdjacentElement() - nos permite agregar un elemento

    Valores:
        afterbegin  :   como primer elemento
        beforebegin :   antes del elemento padre
        beforeend   :   como último elemento
        afterend    :   después del elemento padre 
    
    */

    //contenedor.insertAdjacentElement('afterend',nuevaCaja);

    /**
     * .replaceWith()
     * Nos permite reemplazar el elemento por otro
     * 
     */

    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja);




};