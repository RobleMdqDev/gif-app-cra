import { useState } from "react";


export const CounterApp = ({value})=>{

    const [counter, setCounter] = useState(value)

    const handleSuma = ()=>{
        setCounter(counter + 1)
    }
    const handleResta = ()=>{
        setCounter(counter - 1)
    }
    const handleReset = ()=>{
        setCounter(value)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleSuma}> +1 </button>
            <button onClick={handleResta}> -1 </button>
            <button onClick={handleReset}> Reset </button>
        </>
    );

}