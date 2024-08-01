import { useState } from "react";



const UseStateEx=()=>{
    const [color, setColor]=useState("red");
    const colorhandler=()=>{
        setColor('blue')
    }
    return(
        <>
        <h1>my favrt color is {color}</h1>
        <button onClick={colorhandler}>change color</button>
        </>
    )
};
export default UseStateEx;