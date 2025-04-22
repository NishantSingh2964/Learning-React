import React from 'react'

const Card = (props) => {
  const handleInputChange = (event) => {
    props.setFunction(event.target.value)
  }

  return (
    <div>
      <h1>Nishant</h1>
      <h2>{props.cardName}</h2>
      <input type="text" value={props.cardName} onChange={handleInputChange}/> 
    </div>
  )
}

export default Card
