import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj ={
    username:"hello",
    age:21
  }
  
  let newArr =[1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl m-5 mb-4'>Tailwind</h1>
      <Card username ="Code with me"  btnText ="click me"  />
      <Card username="Hello" />
    </>
  )
}

export default App
