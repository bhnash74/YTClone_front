import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './CommentsPanel.css';
import { FaThumbsUp,FaThumbsDown } from "react-icons/fa";
import ReplyForm from '../ReplyForm/ReplyForm';

function CommentsPanel(props) {
   const[commentary, setComment] = useState([]);
   useEffect (() => {
     axios.get(`http://localhost:5000/api/comments/${props.videoId}`)
        .then ((response) => {
            setComment (response.data);  
            console.log(response.data);
        })
    }, []); 
           
     return (
        <div id="words">            
            <div display="table">
                <div className="col">
                    {commentary.map((comment)=>{
                        return(
                            <div>
                                <tr key="comment_panel"> 
                                    <td id="comment_div">{comment.text}</td> 
                                    <td> <button onClick={() => axios.put(`http://localhost:5000/api/comments/likes/${comment._id}`, {})} className="thumb"><FaThumbsUp /></button></td>
                                    <td>{comment.likes}</td>
                                    <td><button onClick = {() => axios.put(`http://localhost:5000/api/comments/dislikes/${comment._id}`,{})} className="thumb"><FaThumbsDown /></button></td>
                                    <td>{comment.dislikes}</td>
                                    <td><ReplyForm  commentId = {comment._id}/></td>
                                </tr>
                                <tr key="reply_panel">
                                    <td>{comment.replies.map((reply)=>{
                                        return(<tr id="reply_text">{reply.text}</tr>)
                                        })}
                                    </td>
                                </tr>
                            </div>
                           
                        )
                    })}                                                                                                                         
                </div>
            </div> 
        </div>
    )
}

export default CommentsPanel;