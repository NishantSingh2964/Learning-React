import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contect = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Contect Page</h1>
      <div className="contect-buttons">
        <button onClick={ ()=> navigate('info')}>GetInfo</button>
        <button onClick={ ()=> navigate('form')}>GetForm</button>
      </div>
    </div>
  )
}

export default Contect;
