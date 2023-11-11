import './App.css'
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  let [counter, setCounter] = useState(0);

  function clickedIncrement() {  
    setCount(count+1);
    console.log("clicked on increment", count);
  }

  function clickedDecrement() {
    setCount(count-1);
    console.log("clicked on decrement", count);
  }

  function clickedCounterIncrement() {  
    setCounter(counter+1);
    console.log("clicked on increment", counter);
  }

  function clickedCounterDecrement() {
    setCounter(counter-1);
    console.log("clicked on decrement", counter);
  }

  return (
    <>
      <div>
        value of Count: {count}
      </div>
      <button onClick={clickedIncrement}>Increment</button>
      <button onClick={clickedDecrement}>Decrement</button>
      <div>
        value of Counter: {counter}
      </div>
      <button onClick={clickedCounterIncrement}>Increment</button>
      <button onClick={clickedCounterDecrement}>Decrement</button>
    </>
  )
}

export default App
