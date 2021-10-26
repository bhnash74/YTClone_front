import React, {  useEffect,useState } from 'react';
import axios from 'axios';
import './SearchBar.css';
const SearchBar = (props) => {
  const [search, setSearch] = useState('');
  useEffect (() =>{
    axios.get('https://www.googleapis.com/youtube/v3/search'
    ,{
        params: {
            q:  search,
            maxResults: 1,
            key: props.apiKey
        }
    },
)
.then ((response) => {
    const videos = response.data.items;
    const selection=videos[0].id;
})  
},[])
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
        placeholder="Find your Video..."
        value={search.text}
        onChange={handleChange}
      />
        <button
        type="submit"
      >
        Search      
        </button>
    </form>
  )
}
export default SearchBar;   
