import React, {  useContext,useState } from 'react';
import axios from 'axios';
import Context from '../Store/Context';
import './SearchBar.css';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = (event) =>  {
    event.preventDefault();
     setSearch(search);
    }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="post Comment"
        value={search.text}
        onChange={handleChange}
      />
        <button
        type="submit"
      >
            Post      
        </button>
    </form>
  )
}
export default SearchBar;   

// const handleChange = (event) => {
//   setSearch({...search,[event.target.name]: event.target.value
// });
// };