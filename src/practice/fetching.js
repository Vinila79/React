import { useState } from "react";

const FetchungEx=()=>{
    const [count,setcount]=useState(0)

    const fetchData=fetch("")
    .then(res=>res.json())
    .then(res=>console.log(res))
}



