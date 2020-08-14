import React, {Fragment, useState} from 'react';


const Pregunta = () => {

  //useState para la cantidad presupuestada
  const [ cantidad, guardarCantidad ] = useState(0);

  //Función que lee el presupuesto 
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value), 10);
  }

  return ( 
    <Fragment>
      <h4>Captura tu presupuesto semanal</h4>
      <form action="
      
      ">
        <input 
          type="number"
          className="u-full-width"
          placeholder="Captura tu presupuesto"
          onChange={definirPresupuesto}

        />
        <input 
          type="submit"
          className="button-primary u-full-width"
          value="definir Presupuesto"

        />
      </form>
    </Fragment>
   );
}
 
export default Pregunta;