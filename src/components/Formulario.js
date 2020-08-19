import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ( {agregarNuevoGasto} ) => {

  const [ concepto, guardarConcepto ] = useState('');
  const [ cantidad, guardarCantidad ] = useState('');
  const [ error, guardarError ] = useState(false);

  //Cuando el usuario agregue un gasto "botón agregar gasto"
  const agregarGasto = (e) => {
    e.preventDefault();

    // Validar captura
    if(cantidad < 1 || isNaN( cantidad ) || concepto.trim() === '') {
      guardarError(true);
      return;
    }

    // resetear el mensaje de error en <Error />
    guardarError(false);

    // Construir el gasto
    const gasto = {
      concepto,
      cantidad,
      id: shortid.generate()
    }
    
    // Pasar el gasto al componente principal App
    agregarNuevoGasto(gasto);

    // Resetear el formulario
    guardarConcepto('');
    guardarCantidad('');
  }

  return (  
    <form
      onSubmit={agregarGasto}
    >
      <h2 className="titulo1">Agrega tus gastos aquí:</h2>

      { error ?   <Error 
                    mensaje="Favor de llenar ambos campos y/o capturar una
                    cantidad presupuestable"
                  /> :   null }

      <div className="campo" >
        <label htmlFor="">Nombre del gasto</label>
          <input 
            type="text"
            className="u-full-width"
            placeholder="Ej. trasporte"
            value={concepto}
            onChange={ e => guardarConcepto(e.target.value) }
          />
      </div>
      <div className="campo" >
        <label htmlFor="">Cantidad</label>
          <input 
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            value={cantidad}
            onChange={ e => guardarCantidad( parseInt(e.target.value), 10) }
          />
      </div>
      <button 
        type="text"
        className="button-primary u-full-width"
      >Agregar gasto</button>
    </form>
  );
}
 
export default Formulario;