// 01: Obtener elemento
const agregarCaja = () => {
  const nuevaCaja = document.createElement('div');
  nuevaCaja.innerText = 'Nueva Caja';
  nuevaCaja.setAttribute('class', 'caja activa');
  document.getElementById('contenedor1').appendChild(nuevaCaja);
};

// 02: Modificando elemento
const eliminarCaja = () => {
  const padre = document.getElementById('contenedor1');
  const caja = padre.querySelector('.caja');
  if (caja) {
    padre.removeChild(caja);
  } else {
    console.log('No hay más cajas');
  }
};

// 03: Creando elementos
const agregarClase = () => {
  const caja = document.querySelector('#contenedor1 .caja');
  if (caja) caja.classList.add('activa');
};

// 04: Eliminar elemento
const eliminarClase = () => {
  const caja = document.querySelector('#contenedor1 .caja');
  if (caja) caja.classList.remove('activa');
};

// 05: Modificando estilos mediante clases
const toggleClase = () => {
  const caja = document.querySelector('#contenedor1 .caja');
  if (caja) caja.classList.toggle('activa');
};

// 06: modificando estilos mediante js
const comprobarClase = () => {
  const caja = document.querySelector('#contenedor1 .caja');
  if (caja) {
    const tieneClase = caja.classList.contains('activa');
    console.log('¿Tiene clase activa?', tieneClase);
    console.log('Clases actuales:');
    caja.classList.forEach(clase => console.log(clase));
  }
};

// 07 y 08: Eventos y eliminar eventos
let tamaño = 16;

const incrementarFuente = () => {
  const cajas = document.querySelectorAll('.caja');
  tamaño++;
  cajas.forEach(caja => {
    caja.style.fontSize = `${tamaño}px`;
  });
};

const disminuirFuente = () => {
  const cajas = document.querySelectorAll('.caja');
  tamaño--;
  cajas.forEach(caja => {
    caja.style.fontSize = `${tamaño}px`;
  });
};

