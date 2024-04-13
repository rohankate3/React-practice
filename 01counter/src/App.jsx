import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let [counter , setCounter]=useState(0);
    const Increment = () => {
      if (counter < 20) {
          setCounter(prevCounter => prevCounter + 1);
      }
  };

  const Decrement = () => {
      if (counter > 0) {
          setCounter(prevCounter => prevCounter - 1);
      }
    }
  
  return (
    <>

      <h1>Rohan Learning React</h1>
      <h2>Counter is: {counter} </h2>
      <button onClick={Increment}>Increment {counter}</button>
      <br /><br />
      <button onClick={Decrement}>Decrement {counter}</button>



    </>
  )
}

export default App
