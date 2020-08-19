import React, {Fragment, useState} from 'react';
import Error from './Error';


const Pregunta = ( {guardarPresupuesto, guardarRestante, actualizarPregunta} ) => {

  //useState para la cantidad presupuestada
  const [ cantidad, guardarCantidad ] = useState(0);
  const [ error, guardarError ] = useState(false);

  //Función que lee el presupuesto 
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value), 10);
  }

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar captura de presupuesto
    if( cantidad < 1 || isNaN(cantidad) ){
      guardarError(true);
      return;
    }

    //Si se pasa la validación
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    //Para mostrar formulario
    actualizarPregunta(false);


  }

  return ( 
    <Fragment>
      <h4>Captura tu presupuesto semanal</h4>

        { error ? <Error 
          mensaje= 'El valor capturado no es presupuestable'
        />  : null }

      <form 
        onSubmit={agregarPresupuesto}
      
      >
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