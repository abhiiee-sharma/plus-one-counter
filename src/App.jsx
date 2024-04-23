import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counterValue , setCounter] = useState(6)

  const addValue = () => {
    if (counterValue < 20)
        setCounter(counterValue + 1)
  }

  const removeValue = () => {
    if (counterValue > 0) {
      setCounter(prevCounterValue => prevCounterValue - 1);
      console.log(Math.random());
    }
  }  

  return (

    <>
      <h1>+1 Counter</h1>
      <h2>Counter Value : {counterValue} </h2>
      <button
      onClick={addValue}
      >Add value</button>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
