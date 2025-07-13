/*
 * getElementById 
 * Nos permite obtener un elemento en base a su atributo id
 * 
 */

console.log('hola')

const contenedor1 = document.getElementById('contenedor1');
//console.log(contenedor1);

/*
 *children 
 * Nos permite obtener los elementos hijo
 * 
 */

// console.log(contenedor1.children);

 /**
  * 
  * parentElement
  * Nos permite obtener el elemento padre de un elemento
  * 
  */

// console.log(contenedor1.parentElement);


/**
 * getElementByTagName
 * Nos permite obtener una colección de elementos en base a la etiqueta
 * NOTA: devueve una colección HTML. Una colección no es un arreglo
 * 
 */

const divs = document.getElementsByTagName('div');
//console.log(divs);


/**
 * getElementByClassName
 * Nos permite obtener una colección de elementos en base a su clase CSS
 * NOTA: devuelve una colección HTML
 * 
 */

const clase = document.getElementsByClassName('caja')
//console.log(clase);


/**
 * querySelector
 * Nos devuelve el primer elemento que coincida con un selector estilo CSS
 * NOTA: devuelve un nodeList - la lista de nodos se puede iterar con forEach
 * 
 */

//const caja = document.querySelector('#contenedor1 .caja');
//console.log(caja);

/**
 * querySelectorAll
 * Nos permite obtener una colección de elementos en base a un selector estilo CSS
 * NOTA: devuelve un nodeList - la lista de nodos se puede iterar con forEach
 * 
 */

// const cajas = document.querySelectorAll('#contenedor1 .caja');
// console.log(cajas);

// cajas.forEach((caja)=>{
//     console.log(caja);
// });

/**
 * closest
 * Nos permite buscar de adentro hacia afuera en busca de un elemento
 * 
 * 
 */

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);
console.log(ultimaCaja.closest('.contenedor-principal'));


/**
 * Podemos encadenar todos los métodos para obtener elementos
 * 
 */

const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));
