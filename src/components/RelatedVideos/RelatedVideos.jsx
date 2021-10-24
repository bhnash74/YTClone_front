//import { configure } from '@testing-library/dom';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

function RelatedVideos(props) {
    //document.addEventListener('touchstart', handler, {passive: true});
    //config.get('ApiKey'),
    const [relatives, setRelatives] = useState([]);
    useEffect (() => {
    const relatedVideo = axios.get('https://www.googleapis.com/youtube/v3/search'
              ,{
        params: {
            relatedToVideoId: 'xFrGuyw1V8s',          //`${props.videoId}`    ,
            type: 'video',
            maxResults: 3,
           key: 'AIzaSyAqEtoqBcEdykiYyXrL2IQbRZMfU0ObLyk'
        }})
        .then ((response) => {
            setRelatives(response.data.items);
            
        })   
   
    },[]);   
    return (
        <div>
             <h4 align="center">Related Videos</h4>
            {relatives.map((item) =>{
                return (
                    <iframe id="ytvideo" type="text/html" width="270" height="180"
            src= {`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1`} title="youtube video"
            frameBorder="0"></iframe>
                );

            })} 
        </div>
    )
    
}

export default RelatedVideos;
//{`https://www.youtube.com/embed/${relatives[2].id.videoId}?autoplay=1`}