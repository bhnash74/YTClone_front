import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentsPanel from './CommentsPanel/CommentsPanel';
import RelatedVideos from "./RelatedVideos/RelatedVideos";
import CommentForm from './CommentForm/CommentForm';
import SearchBar from './SearchBar/SearchBar';
//import Store from './Store/Context';
//const config = require('config');
 function App() {
    const [videoId, setVideoId]= useState('');
    useEffect (() =>{
        const videoList =  axios.get('https://www.googleapis.com/youtube/v3/search'
        ,{
            params: {
                q:  'xFrGuyw1V8s'   ,         //`${search}`,
                maxResults: 1,
                key: 'AIzaSyAqEtoqBcEdykiYyXrL2IQbRZMfU0ObLyk' 
            }
        },
    )
    .then ((response) => {
        const videos = response.data.items;
        const selection=videos[0].id;
        const vid = selection.videoId;
        setVideoId(vid);
    })  
    },[])

    return (  
    <div className = "row">
    <div className = "col-9">
        <h2>Playa, Playa</h2>
           <iframe id="ytvideo" type="text/html" width="540" height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="youtube video"
            frameBorder="0"></iframe>  
    <CommentsPanel videoId={videoId} /> 
    <CommentForm videoId={videoId}/>
    {/*<Store>*/}
    <SearchBar />
    </div>
    <div className = "nav flex-column col-3" id  = "relatedvideos">
    <RelatedVideos videoId={videoId} />
    </div>
    </div>
    )
 
}

export default App;