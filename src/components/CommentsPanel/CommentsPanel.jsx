import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './CommentsPanel.css';
import { FaThumbsUp,FaThumbsDown } from "react-icons/fa";

function CommentsPanel(props) {
   const[commentary, setComment] = useState([]);
   const[likes, setLikes] = useState(0);
   const [dislikes, setDislikes] = useState(0);
   useEffect (() => {
     axios.get("http://localhost:5000/api/comments/xFrGuyw1V8s")
        .then ((response) => {
            const currentComment = response.data;
            setComment (currentComment);  
            const likes = (commentary.likes);
            const dislikes=(commentary.dislikes);
            console.log(currentComment);
            console.log(likes);
        })
    }, []); 
           
     return (
      
        <div id="words">            
            <div className="row" id="titlerating">
                <div className="col">
                    {commentary.map((comment)=>{
                        return(
                            <div>
                            <tr key={comment._id}> 
                                <td id="comment_div">{comment.text}</td> 
                                <td> <button onClick={() => setLikes(likes + 1)} className="thumb"><FaThumbsUp /></button></td>
                                <td>{likes}</td>
                                <td><button onClick = {() => setDislikes(dislikes + 1)} className="thumb"><FaThumbsDown /></button></td>
                                <td>{dislikes}</td>
                            </tr>
                            <tr>
                                <td>{comment.replies.map((reply)=>{
                                    return(<td>{reply.text}</td>)
                                    })}</td>
                             </tr>
                             </div>
                           
                        )
                    })}                                                                                                                         
                </div>
            </div> 
               { /*<form className="form-inline" action="http://localhost:5000/api/comments/" method="post">
                        <div className= " form-group">
                            <input type="text" className="form-control" name ="text" placeholder="Post Comment..." rows="1"/>
                        </div>
                        <div className="form-group">
                            <input type="hidden" className="form-control" name ="videoId" value={`${commentary.videoId}`} /> 
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                            <div>
                                
                        
                        </div>
                </form>    */ }
        </div>
    )
}

export default CommentsPanel;