import React from 'react';

const Erro = ({ mensaje }) => {
  return ( 
    <p className="alert alert-danger error" >{mensaje}</p>
   );
}
 
export default Erro;