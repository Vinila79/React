import { useMemo, useState } from "react";


const UsememoEx=()=>{
    const [count1,setCount1]=useState(0);
    const [count2,setcount2]=useState(10);
    const iseven=useMemo(()=>{
        console.log("executing...")
        return(
             count1 % 2 === 0 ? "even" : "odd"
        )
    },[count1])
return(
    <>
    <h1>{count1} is an {iseven}</h1>
    <h2>{count2}</h2>
    <button onClick={()=>setCount1(count1+1)}>Increment</button>
    <button onClick={()=>setcount2(count2-1)}>decrement</button>
    </>
)
};
export default UsememoEx;