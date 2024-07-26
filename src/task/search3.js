import { useState } from "react"

import React from "react"



const IncrementExample1=()=>{

    const [count,setcount]=useState(0)


    const [data, setData]=useState({name:"vinila" , age: 20 })
    const [string , setString]= useState("gayatri")
    const [array , setArray] = useState([ {name:"vinila",age:22}])
    console.log(array);

//    const IncrementHandler=()=>{
//     setcount(count+1)
//    }

    return(
        <div>
        <h3>Name :{data.name}</h3>
        <h3>string :{string}</h3>
            </div>

    )
        // <div>
        //     <h3>count:{count}</h3>
        //     <button onClick={IncrementHandler}> Increment </button>
        // </div>

       
      
}
export default IncrementExample1;










import axios from 'axios';
import './search.css';
import { useEffect, useState } from 'react';

const SearchFunctionality = () => {
  const [data, setdata] = useState('');
  const [loaddata , setloaddata] = useState([]);
 console.log(loaddata)

  useEffect(()=>{

    fetchdata();
  },[])



  const fetchdata = async () => {
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    // console.log(response.data.results, "response")
    const datas=await response.json();
    console.log(datas);
    // setloaddata(response.data.results)
    }catch(err){
      console.log(err.message)
    } 
  }

  const handleSearch = (event) => {
    setdata(event.target.value);
  };

  // const filteredItems = fetchdata.names.filter(item =>
  //   item.toLowerCase().includes(data.toLowerCase())
  // );
 
  
  return (
    <div>
      <h1>Type below for Names</h1>
      <input
        type="text"
        placeholder="Search..."
        value={data}
        onChange={handleSearch}
      />

      {/* <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default SearchFunctionality;
