import axios from 'axios';
// import './search.css';
import { useEffect, useState } from 'react';

const SearchFunctionality = () => {
  const [data, setdata] = useState('');
  const [loaddata , setloaddata] = useState([]);


  useEffect(()=>{

    fetchdata();
  },[])



  const fetchdata = async () => {
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    // console.log(response.data.results, "response")
    
    
    setloaddata(response.data.results);
    
    }catch(err){
      console.log(err.message)
    } 
  }

  const handleSearch = (event) => {
    setdata(event.target.value);
  };

  const filteredItems = loaddata.filter(item =>
    item.name.toLowerCase().includes(data.toLowerCase())
  );
//   console.log(filteredItems)
 
  
  return (
    <div>
      <h1>Type below for Names</h1>
      <input
        type="text"
        placeholder="Search..."
        value={data}
        onChange={handleSearch}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}

      </ul>
    </div>
  );
};

export default SearchFunctionality;
