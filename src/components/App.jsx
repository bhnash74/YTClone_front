import React from 'react';
import axios from 'axios';
import CommentsPanel from './CommentsPanel/CommentsPanel';
import RelatedVideos from "./RelatedVideos/RelatedVideos";
//const config = require('config');


 function App() {
    //const [response, setResponse] = useState(null);
       
    const videoList =  axios.get('https://www.googleapis.com/youtube/v3/search'
     ,{
        params: {
            q: 'dancing queen',
            maxResults: 3,
            key: '{API_key}' 
        }
    }  
    );  
 
 
  //   var videoId =videoList.data.items[0].id.videoId;
    // console.log(getVideo);

    return (  
    <>
    <div className = "row">
    <div className = "col-9">
        <h2>Playa, Playa</h2>
           <iframe id="ytvideo" type="text/html" width="540" height="360"
            src='https://www.youtube.com/embed/xFrGuyw1V8s?autoplay=1' title="youtube video"
            frameBorder="0"></iframe>  
    <CommentsPanel /> 
 
    </div>
  {/*  <div className = "nav flex-column col-3" id  = "relatedvideos">
    <RelatedVideos />
    </div>*/}
        </div>

   
    {/*<Navbar />*/}
    </>   
    )
 
}

export default App;