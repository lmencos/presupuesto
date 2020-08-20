import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const year = new Date().getFullYear();

  //Definir presupuesto
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ crearGasto, guardarCrearGasto ] = useState(false);

  //Función para actualizar el restante del gasto
  useEffect( () => {
    if(crearGasto){
      //Agregar gasto
      guardarGastos([
        ...gastos,
        gasto
      ])

      //Restar del presupuesto
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante);

      //Reset a false
      guardarCrearGasto(false);
    }
  }, [gasto, gastos, crearGasto, restante] )


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
                guardarGasto ={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>
            <div className="one-half column" >
              <Listado 
                gastos={gastos}
              />
              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
            </div>
          )  }

        </div>
        <footer className="footer">
          <p>Todos los derechos reservados, Luis Mencos Guzmán {year} &copy;
                  v1.2
          </p>
        </footer>
      </header>
    </div>
  );
}

export default App;
