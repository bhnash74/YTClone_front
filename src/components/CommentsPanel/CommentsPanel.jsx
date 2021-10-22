import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './CommentsPanel.css';
import { FaThumbsUp,FaThumbsDown } from "react-icons/fa";

function CommentsPanel(props) {
   const[commentary, setComment] = useState([]);
   useEffect (() => {
     axios.get(' http://localhost:5000/api/comments/xFrGuyw1V8s')
        .then ((response) => {
            const currentComment = response.data;
            console.log(currentComment);
            setComment (currentComment);
        })   
    }, []);   
               
     return (
         
        <div id="words">
            <div className="row" id="titlerating">
                <div className="col-3">
                     Comment 
                </div>
            <div className="col-3">
                <FaThumbsUp/>  {commentary.likes}
                </div>
                <div className="col-3">
                <FaThumbsDown/> {commentary.dislikes}
                </div>
                </div> 
            <div className = "row" id="commentfeed">
                {commentary.text}
            </div>  
            <form className="form-inline" action="http://localhost:5000/api/comments/" method="post">
                    <div className= " form-group">
                        <input type="text" className="form-control" name ="text" placeholder="Type here..." rows="1"/>
                    </div>
                    <div className="form-group">
                        <input type="hidden" className="form-control" name ="videoId" value={`${commentary.videoId}`} /> 
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                        <div>
                            
                       
                    </div>
                </form>     
        </div>
    )
}

export default CommentsPanel;