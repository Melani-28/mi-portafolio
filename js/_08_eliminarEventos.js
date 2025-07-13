const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const primeraCaja = document.querySelector('.caja');



/* PRIMERO RABAJAR CON ESTE CODIGO, CUANDO EXPLIQUES LO DE ACTIVAR EVENTOS EN CASO QUIERES ELIMINAR
boton1.addEventListener('click', () => {
    primeraCaja.addEventListener('click', () => {
        primeraCaja.classList.toggle('activa');
    });
});*/


const toggleClase = () => {
    primeraCaja.classList.toggle('activa');
}

boton1.addEventListener('click', () =>{
    primeraCaja.addEventListener('click', toggleClase);
})


boton2.addEventListener('click', () =>{
    primeraCaja.removeEventListener('click', toggleClase);
})

