import axios from "axios";
import React, { useEffect, useState } from "react";


function UseEffectExample(){
    const [data, setData]=useState([])

    useEffect(()=>{
        console.log("use effect is executing...")
        //perform side effects
        fetchData();
    },[]);



   const  fetchData = async ()=>{

        try{
        const response1 = await axios("https://fakestoreapi.com/products");
       console.log(response1, "response1");
       if(response1.status === 200) {
        setData(response1.data);
       }
     } catch (err) {
     }finally{
     }
     };


    return(
        <div>
           {
            data.lenght > 0 && <>
            {
                data.map(each=>{
                    return(
                        <>
                        <h3>{each.title}</h3>
                        </>
                    )
                })
            }
            
            </>
           }
            </div>
    )
};
export default UseEffectExample;


