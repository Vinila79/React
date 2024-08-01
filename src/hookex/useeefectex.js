import { useEffect, useState } from "react";


const UseEffectEx=()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1)

        },1000)
    },[count])

    return(
        <>
        <h1>i have rendered {count}</h1>
        </>
    )
};
export default UseEffectEx;