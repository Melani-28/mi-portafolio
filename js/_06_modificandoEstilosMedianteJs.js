/**
 * Modificar estilos mediante CSS mediante "inline styles"
 * 
 */

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
//console.log(ultimaCaja);

ultimaCaja.style.background = '#000';
ultimaCaja.style.color = '#fff';


const cajas =document.querySelectorAll('.caja');
let tamaño = 24;

const incrementarFuente = () =>{
    cajas.forEach((caja)=>{
        //console.log(caja);
        caja.style.fontSize = `${tamaño + 1}px`;
        tamaño++;
    });
}


const disminuirFuente = () =>{
    cajas.forEach((caja)=>{
        //console.log(caja);
        caja.style.fontSize = `${tamaño - 1}px`;
        tamaño--;
    });
}

