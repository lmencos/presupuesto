import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {

  //Definir presupuesto
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);

  //Función que se ejecutará al agregar un nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    guardarGastos([
      ...gastos,
      gasto
    ])
  }

  return (
    <div className="container" >
      <header>
        <h3>Gasto semanal</h3>
        <div className="contenido-principal contenido" >

          { mostrarPregunta ? 
          (          
            <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
            />
          )  :  
          (
            <div className="row" >
            <div className="one-half column" >
              <Formulario 
                agregarNuevoGasto={agregarNuevoGasto}
              />
            </div>
            <div className="one-half column" >
              <Listado 
                gastos={gastos}
              />
            </div>
            </div>
          )  }

        </div>
      </header>
    </div>
  );
}

export default App;
