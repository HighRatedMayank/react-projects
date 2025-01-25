import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "Mayank",
    age: "21"
  }
  return (
    <>
      <h1 className='bg-green-500 rounded-md mb-5'>Tailwind test</h1>

      <Card username = "chai aur code"/>
      <Card username = "Mayank"/>
    </>
  )
}

export default App
