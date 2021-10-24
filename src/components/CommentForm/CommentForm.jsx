import React, {useState, useEffect}from 'react';
import axios from 'axios';
import {commentary} from "../CommentsPanel/CommentsPanel"


const CommentForm = (props) => {
  const [formValue, setformValue] = useState({
    text: '',
    videoId:  'xFrGuyw1V8s'
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = (event) =>  {
    // store the states in the form data
    axios.post('http://localhost:5000/api/comments/', formValue);
    }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Write Something..."
        value={formValue.text}
        onChange={handleChange}
      />
        <button
        type="submit"
      >
            Post Comment    
        </button>
    </form>
  )
}

export default CommentForm;
 
