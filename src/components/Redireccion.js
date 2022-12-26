import React from 'react';
import { useParams } from 'react-router-dom';
import Identification from './Identification';
 
const Redireccion = () => {
  let {usuario} = useParams();
  return (
    <>
    <Identification codigoUsuario={usuario} />
    </>
  );
};
 
export default Redireccion;