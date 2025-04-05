import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Contect = () => {

  const phone = useContext(AppContext);

  return (
    <div>
      <h2>Contect</h2>
      <h3>phone:{phone}</h3>
    </div>
  )
}

export default Contect
