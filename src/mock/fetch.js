import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

const MockTest=()=>{
const [data,setData]=useState();

useEffect(()=>{
    fetchData();
},[])
        const fetchData=async()=>{
        const response =await axios.get("")
        console.log(response.data,"response")
        setData(response.data)
    }
    return(
        <>
       <h1>hiii</h1>
        </>
    )
}
export default MockTest;