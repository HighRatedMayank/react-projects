import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)
  
  const addValue = () => {
    if(count>=20)
      return 20;
    count = count + 1;
    setCount(count)
  }

  const reduceValue = () => {
    if(count<=0)
      return 0;
    count = count - 1;
    setCount(count)
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value : {count}</h2>

    <button onClick={addValue}>Add value {count}</button>
    <br /> 
    <button onClick={reduceValue}>Reduce value {count}</button>
    </>
  )
}

export default App
