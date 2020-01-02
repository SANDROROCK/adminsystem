import React from 'react';
import Cabecalho from '../../components/cabecalho';

import  './styles.css';

export default function home() {

  const token = localStorage.getItem('token');


  return (

    <Cabecalho/>
    
  );
}
