import React from 'react';
import Gasto from './Gasto';

const Listado = ( {gastos} ) => {
  return ( 
    <div className="gastos-realizados" >
      <h3 className="titulo1" >Listado de gastos</h3>
        { gastos.map( gasto => (
          <Gasto 
            key={gasto.id}
            gasto={gasto}
          />
        ) ) }
    </div>
   );
}
 
export default Listado;