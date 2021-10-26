import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentsPanel from './CommentsPanel/CommentsPanel';
import RelatedVideos from "./RelatedVideos/RelatedVideos";
import CommentForm from './CommentForm/CommentForm';
import SearchBar from './SearchBar/SearchBar';
import './App.css';
function App() {
    const API= `${process.env.REACT_APP_API_KEY}`;
    const [videoId, setVideoId]= useState('rg6CiPI6h2g');
    return (  
    <div className = "row">
    <div className = "col-9">
    <h2>YT_Clone</h2>
  {<SearchBar apiKey = {API}/>}
       
           <iframe id="ytvideo" type="text/html" width="540" height="360" align="center"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="youtube video"
            frameBorder="0"></iframe>  
    <CommentsPanel videoId={videoId} /> 
    <CommentForm videoId={videoId}/>
    </div>
    <div className = "nav flex-column col-3" id  = "relatedvideos">
    <RelatedVideos videoId={videoId} apiKey = {API}/>
    </div>
    </div>
    )
}
export default App;