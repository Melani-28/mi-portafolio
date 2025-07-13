/**
 * Modificar estilos CSS mediante clases
 * 
 */

const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);


// classList.add() - nos permite agregar clases a un elemento
const agregarClase = () => {
    primeraCaja.classList.add('activa');

};


// classList.remove() - nos permite remover clases a un elemento
const eliminarClase = () => {
    primeraCaja.classList.remove('activa');
};


// classList.toggle() - nos permite alternar clases a un elemento
const toggleClase = () => {
    primeraCaja.classList.toggle('activa');
};


// classList.toggle() - nos permite alternar clases a un elemento
const comprobarClase = () => {
    if(primeraCaja.classList.contains('activa')){
        console.log('la caja tiene la clase "activa"');
    }else{
        console.log('la caja no tiene la clase "activa"');
    }

    console.log('y contiene las siguientes clases')
    primeraCaja.classList.forEach((clase) =>{
        console.log(clase)
    });
};