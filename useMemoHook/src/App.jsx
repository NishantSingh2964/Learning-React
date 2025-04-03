import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0);

  const increaseAmount = () => {
    setCount(count + 1);
  }

  const decreaseAmount = () => {
    setCount(count - 1);
  }

  const expensiveTask = (num) => {
    console.log("Inside Expensive Task");
    for(let i = 0; i <= 1000000; i++){}
     return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input])

  return (
    <>
      <div><h1>Count: {count}</h1></div>
      <button onClick={increaseAmount}>Increase</button>
      <br />
      <button onClick={decreaseAmount}>Decrease</button>
      <br /> 
      <input 
      type="number"
      placeholder='Enter number'
      value={input}
      onChange = {(e) => setInput(e.target.value)}
      />
      <div>
        <h2>Double:{doubleValue}</h2>
      </div>
    </>
  )
}

export default App
