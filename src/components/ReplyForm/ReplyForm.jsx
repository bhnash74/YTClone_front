import React, {useState, useEffect}from 'react';
import axios from 'axios';


const ReplyForm = (props) => {
  const [replyValue, setReplyValue] = useState({
    text: '',
    commentId:  'xFrGuyw1V8s'                  //`${props.commentId}`
  });

  const handleChange = (event) => {
    setReplyValue({
      ...replyValue,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = (event) =>  {
    event.preventDefault();
    // store the states in the form data
    axios.post('http://localhost:5000/api/comments/', replyValue);
    }
  
  return (
    <form onSubmit={handleSubmit}>
      <p>Login Form</p>
      <input
        type="text"
        name="text"
        placeholder="post Comment"
        value={formValue.text}
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

export default ReplyForm;