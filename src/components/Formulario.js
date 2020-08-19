import React, { useState } from 'react';

const Formulario = () => {

  const [ concepto, guardarConcepto ] = useState('');
  const [ cantidad, guardarCantidad ] = useState(0);

  //Cuando el usuario agregue un gasto "botón agregar gasto"
  const agregarGasto = (e) => {
    e.preventDefault();

    // Validar captura

    // Construir el gasto

    // Pasar el gasto al componente principal App

    // Resetear el formulario
  }

  return (  
    <form
      onSubmit={agregarGasto}
    >
      <h2 className="titulo1">Agrega tus gastos aquí:</h2>
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