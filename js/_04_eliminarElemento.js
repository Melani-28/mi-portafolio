const eliminarCaja = () =>{
    const padre = document.getElementById('contenedor1');
    const cajaAELiminar = padre.querySelector('.caja')
    //console.log(padre)

    if(cajaAELiminar){
        padre.removeChild(cajaAELiminar);
    }else{
        console.log('No hay mas cajas');
    }
    
    
}