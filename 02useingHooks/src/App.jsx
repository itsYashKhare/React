import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  // let counter = 25;

  const addValue = () => {
    // console.log("value added", counter);
    // counter += 1;

    if (counter <20){
      
      setCounter(counter + 1);
    }

  }
  const removeValue = () => {
    // console.log("value removed", counter);
    if(counter >0)

      setCounter(counter - 1);

  }

  return (
    <>
      <h1>Counter : {counter} </h1>
      <button onClick={addValue}>Add Value {counter} </button>
      <br /><br />
      <button onClick={removeValue} >Remove Value {counter} </button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
