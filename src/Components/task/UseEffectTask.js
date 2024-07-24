import axios from "axios";
import  { useEffect, useState } from "react";


function UseEffectTask(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        console.log("use effect task...")
        fetchData();
    },[])


const fetchData = async () =>{
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response.data , "response");
    setdata(response.data)
};


return(
    <div>
       {/* {
    <>
        <h1>useEffect</h1>
        {
            data.map((eachdata)=> (
                <h1>{eachdata.title}</h1>
            )

            )
        }
    </>
       } */}
       <table style={{borderCollapse:"collapse" ,border:"2px solid "}}>
        <thead style={{border:"2px solid "}}>
            <tr style={{border:"2px solid "}}>
                <th style={{border:"2px solid "}}>ID</th>
                <th style={{border:"2px solid "}}>Title</th>
                <th style={{border:"2px solid "}}>Price</th>
                <th >Category</th>
            </tr>

        </thead>

        <tbody style={{border:"2px solid "}}>
            {
                data.map((eachdata)=>(
                 
                    <tr style={{border:"2px solid "}}>
                    <td style={{border:"2px solid "}}>{eachdata.id}</td>
                    <td style={{border:"2px solid "}}>{eachdata.title}</td>
                    <td style={{border:"2px solid "}}>{eachdata.price}</td>
                    <td style={{border:"2px solid "}}>{eachdata.category}</td>
                    </tr>
                 
                ))
            }
        </tbody>
       </table>
    </div>
)
}
export default UseEffectTask;

