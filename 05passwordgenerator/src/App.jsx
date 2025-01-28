import { useState } from 'react'
import { useCallback } from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }

    if(charAllowed){
      str += "!@#$%^&*_-~"
    }

    for(let i = 1;i<=array.length; i++){
      let char = Math.floor(Math.random() * str.length +1) ;
      pass = str.charAt(char)
    }

    setPassword(pass)
  }, [numberAllowed, charAllowed, password])

  return (
    <>
      <h1 className='text-4xl font-extrabold text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md bg-slate-800 px-4 my-8 text-gray-400 justify-center items-center'>
        <div className='shadow-lg flex overflow-hidden mb-4 '>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly />
        </div>
      </div>
    </>
  )
}

export default App
