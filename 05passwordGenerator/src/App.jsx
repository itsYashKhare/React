import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  // using useReference hook => it takes reference from element which to manipulated
  const passwordRef = useRef(null)

  //we used  useCallback memorize function 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) {
      str += "0123456789"
    }
    if (character) {
      str += "!@#$%^&*-"
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, number, character, setPassword]) //we used setpassword here for optimize code

  const copyPassword = useCallback(() => {
    passwordRef.current?.select() //<= selct the curent value
    passwordRef.current?.setSelectionRange(0,100) //<= added range 
    window.navigator.clipboard.writeText(password) //<= we get the window on client side only
  }, [password])


  //useEffect is used when page is reloaded  useeffect reruns if dependencies or value chages it rerun 
  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />

          <label > Length:{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={character}
            id="characterInput"
            onChange={() => {
              setCharacter((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
