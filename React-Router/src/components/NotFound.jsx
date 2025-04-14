import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

   const nevigate = useNavigate(); 

  return (
    <div className='not-found'>
      <h2>404 | Page not found</h2>
      <br />
      <button onClick={ ()=> nevigate('/')}>Back to Home</button>
    </div>
  )
};

export default NotFound;
