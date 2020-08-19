import React, { useState } from 'react';

const Formulario = () => {
  return (  
    <form>
      <h2 className="titulo1">Agrega tus gastos aquí:</h2>
      <div className="campo" >
        <label htmlFor="">Nombre del gasto</label>
          <input 
            type="text"
            className="u-full-width"
            placeholder="Ej. trasporte"
          />
      </div>
      <div className="campo" >
        <label htmlFor="">Cantidad</label>
          <input 
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
          />
      </div>
      <input 
        type="text"
        className="button-primary u-full-width"
        value="Agregar gasto"
        />
    </form>
  );
}
 
export default Formulario;