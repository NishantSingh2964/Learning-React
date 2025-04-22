import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [text, setText] = useState('')

  return (
    <>
      <Card cardName={text} setFunction={setText}/>
      <h2>Given Value is {text}</h2>
    </>
  )
}

export default App
