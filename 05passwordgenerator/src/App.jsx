import { useRef, useState } from 'react'
import { useCallback, useEffect } from 'react';
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  //use callback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "!@#$%^&*_-~"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // copy to clipboard
  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }, [password])

  // use effect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed]);
  

  return (
    <>
      <h1 className='text-4xl font-extrabold text-center text-white pt-6'>Password Generator</h1>
      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='w-full max-w-md px-4 text-orange-400'>
          <div className='shadow-lg flex overflow-hidden mb-4 justify-around'>
            <input type="text" 
            value={password} 
            ref={passwordRef}
            className='outline-none w-full py-1 px-3 rounded-lg bg-white' 
            placeholder='password' 
            readOnly />
            <button 
            className='text-blue-600 px-2 py-2 rounded-lg bg-blue-900'
            onClick={copyToClipboard}
            >Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6}
              max={24}
              step={1}
              value={length}
              name='slider'
              className='cursor-pointer'
              onChange={(e) => {
                  setLength(e.target.value)
              }}    
              />
              <label htmlFor="slider">Length : {length}</label>
            </div>
            <div>
              <input type="checkbox" name="numAllowed"
              value={numberAllowed}
              className='mx-1'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}  
              />
              <label htmlFor="numAllowed">Numbers</label>
            </div>
            <div>
              <input type="checkbox" name="chAllowed"
              value={charAllowed}
              defaultChecked={charAllowed}
              className='mx-1'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="chAllowed">Characters</label>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
