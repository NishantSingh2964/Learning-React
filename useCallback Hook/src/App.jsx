import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './components/ChildComponents';

function App() {
  const [count, setCount] = useState(0)

  const addValue = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>

    <div>
      <h1>Count:{count}</h1>
    </div>
    <br />
    <button onClick={addValue}>Increment</button>

    <div>
      <ChildComponents 
      buttonName = 'Click me'
      handleClick = {addValue}
      />
    </div>
    
    </>
  )
}

export default App
