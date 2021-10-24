import React, {useState, useEffect}from 'react';
import axios from 'axios';
import CommentsPanel from '../CommentsPanel/CommentsPanel';

const ReplyForm = (props) => {
  const [replyValue, setReplyValue] = useState({
    text: ''
  });
  const commentId = '617220e5c0ee5887d0e6ea29';  //`${props.commentId}` 
  const handleChange = (event) => {
    setReplyValue({
      ...replyValue,
      [event.target.name]: event.target.value
    });
  }
  const handleSubmit = (event) =>  {
    event.preventDefault();
    // store the states in the form data
    axios.post(`http://localhost:5000/api/comments/${commentId}`, replyValue);
    }
  
  return (
    <span>
    <form id="replyForm" onSubmit={handleSubmit} rows="1">
      <input
        type="text"
        name="text"
        placeholder="Reply"
        value={replyValue.text}
        onChange={handleChange}
      />
        <button
        type="submit"
      >   Reply      
        </button>
    </form>
    </span>
  )
}

export default ReplyForm;