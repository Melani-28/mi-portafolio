const boton1 = document.getElementById('boton1');
const primeraCaja = document.querySelector('.caja');


boton1.addEventListener('click', (e) =>{
   //console.log(e);
   primeraCaja.classList.toggle('activa');
});

/**
 * agregando el evento a múltiples elementos
 * Podemos agregar el evento a multiples elementos recorriéndolops mediante un ciclo
 * NOTA: no es la forma más óptima
 * 
 */

const cajas = document.querySelectorAll('.caja');

cajas.forEach((caja)=>{
    caja.addEventListener('click', (e) =>{
        console.log(`Haz click en la caja: ${e.target.innerHTML}`);
    });
});