import React, {useState} from 'react';
import axios from 'axios';

const ReplyForm = (props) => {
  const [replyValue, setReplyValue] = useState({
    text: ''
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
    axios.post(`http://localhost:5000/api/comments/${props.commentId}`, replyValue);
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
        <button type="submit">
          Reply      
        </button>
      </form>
    </span>
  )
}

export default ReplyForm;