import './search.css';
import { useState } from 'react';

const SearchFunctionality = () => {
  const [data, setdata] = useState('');
  const [names] = useState([
    'Vinila',
    'gayatri',
    'bhargavi',
    'aaaa',
    'bbbbb',
    'ccccc'
  ]);

  const handleSearch = (event) => {
    setdata(event.target.value);
  };

  const filteredItems = names.filter(item =>
    item.toLowerCase().includes(data.toLowerCase())
  );
 
  
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
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFunctionality;
