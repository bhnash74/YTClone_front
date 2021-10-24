import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentsPanel from './CommentsPanel/CommentsPanel';
import RelatedVideos from "./RelatedVideos/RelatedVideos";
import CommentForm from './CommentForm/CommentForm';
import SearchBar from './SearchBar/SearchBar';
import './App.css';
//const config = require('config');
 function App() {
    const [videoId, setVideoId]= useState('');
    useEffect (() =>{
        const videoList =  axios.get('https://www.googleapis.com/youtube/v3/search'
        ,{
            params: {
                q:  {videoId}   ,
                maxResults: 1,
                key: {API_key} 
            }
        },
    )
    .then ((response) => {
        const videos = response.data.items;
        const selection=videos[0].id;
        setVideoId(selection.videoId);
    })  
    },[])

    return (  
    <div className = "row">
    <div className = "col-9">
    <h2>YT_Clone</h2>
    <SearchBar />
       
           <iframe id="ytvideo" type="text/html" width="540" height="360" align="center"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="youtube video"
            frameBorder="0"></iframe>  
    <CommentsPanel videoId={videoId} /> 
    <CommentForm videoId={videoId}/>
    {/*<Store>*/}
    </div>
    <div className = "nav flex-column col-3" id  = "relatedvideos">
    <RelatedVideos videoId={videoId} />
    </div>
    </div>
    )
 
}

export default App;