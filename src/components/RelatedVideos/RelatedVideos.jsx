//import { configure } from '@testing-library/dom';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

function RelatedVideos(props) {
    const [relatives, setRelatives] = useState([]);
    useEffect (() => {
    const relatedVideos = axios.get('https://www.googleapis.com/youtube/v3/search'
        ,{
        params: {
            relatedToVideoId: props.videoId,                   
            type: 'video',
            maxResults: 3,
            key: props.apiKey
        }})
        .then ((response) => {
            const related = (response.data.items);
            setRelatives(related);
            console.log(relatives);
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