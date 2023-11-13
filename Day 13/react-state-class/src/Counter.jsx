import { useState } from "react"

export default function Counter() {
    
    // let [stateVariable,setStateVariable] = useState(0);
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count+1);
        // console.log(count);
    }

    let decCount = () => {
        setCount(count-1);
        // console.log(count);
    }

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={incCount}>Increase Count</button>
            <button onClick={decCount}>Decrease Count</button>
        </div>
    )
}