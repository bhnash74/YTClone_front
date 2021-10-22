//import { configure } from '@testing-library/dom';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

function RelatedVideos(props) {
    //document.addEventListener('touchstart', handler, {passive: true});
    //config.get('ApiKey'),
    const [relatives, setRelatives] = useState([]);
    useEffect (() => {
    axios.get('https://www.googleapis.com/youtube/v3/search?relatedToVideoId=qL2FfnJzs8k&type=video&maxResults=3&key=AIzaSyC1VDo1PTGyujqUuq4qtpulC3SnAs1SjoU')
          //      ,{
        //params: {
        //    relatedToVideoId:   'qL2FfnJzs8k'    ,
       //     type: 'video',
        //    maxResults: 3,
        //    key: 'AIzaSyC1VDo1PTGyujqUuq4qtpulC3SnAs1SjoU'
       // }
       // })
        .then ((response) => {
            const relatives = response.data.items;
            setRelatives(relatives);
            console.log(relatives[0].id.videoId);
            const rel1 = relatives[0].id.videoId; 
            const rel2 = relatives[1].id.videoId;
            const rel3 = relatives[2].id.videoId;      
        })   
   // .then ((response) => {
     //   const relatedVideo = response.data;
   //     console.log(relatedVideo);
    //        setComment (relatedVideo);
     //   })   
    }, []);   
     return (
         <div>
             <h4 align="center">Related Videos</h4>
            <iframe id="ytvideo" type="text/html" width="270" height="180"
            src= "https://www.youtube.com/embed/qL2FfnJzs8k?autoplay=1" title="youtube video"
            frameBorder="0"></iframe>
            <iframe id="ytvideo" type="text/html" width="270" height="180"
            src="https://www.youtube.com/embed/qL2FfnJzs8k?autoplay=1" title="youtube video"
            frameBorder="0"></iframe>
            <iframe id="ytvideo" type="text/html" width="270" height="180"
            src="https://www.youtube.com/embed/qL2FfnJzs8k?autoplay=1" title="youtube video"
            frameBorder="0"></iframe>
        </div>
    )
}
//{`https://www.youtube.com/embed/${rel1}?autoplay=1`}
export default RelatedVideos;