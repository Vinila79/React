import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";




const UseStateExample = () => {
    const initialState=10;
    const [count , setCount]= useState(initialState);

    // const IncrementaHandler = () =>{
    //     // setCount((count) => count+1);
    //     setCount(count+1);
    // }
    // const decrementHandler = () =>{
    //     if (count > 0){
    //     setCount((count) => count-1);}
    // }
    // const resetHandler = () => {
    //     setCount(0);
    // }

    const CounterHandler=(type,scale)=>{
        
        switch(type) {
            case  "INCREMENT":
            setCount((count) => count+scale)
            break;

            case "DECREMENT":
            if (count > 0) {
                setCount((count) => count-scale)
            }
            break;
            case "RESET":
            setCount(0);
            break;
            default:
                break;
        }
    }

    return<>
    
    <h2>{count}</h2>
    {/* <button onClick={IncrementaHandler}>Increment</button>
    <button onClick={decrementHandler}>decrement</button>
    <button onClick={resetHandler}>Reset</button> */}
    <button onClick={() => CounterHandler("INCREMENT" , 10)}>Increment</button>
    <button onClick={() => CounterHandler("DECREMENT" , 10)}>decrement</button>
    <button onClick={() => CounterHandler("RESET")}>Reset</button>
    </>
};
export default UseStateExample;