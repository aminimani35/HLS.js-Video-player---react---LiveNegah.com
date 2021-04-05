import {useEffect,useRef} from 'react';
import Hls, { HlsUrlParameters } from 'hls.js';
import './Player.css';


const Player = ({link}) => {
   const video = useRef();
   useEffect(() => {
    
    
    if(Hls.isSupported()){
        const player = new Hls();
        player.loadSource(link);
        player.attachMedia(video.current);
 
        console.log(video.current)
        
     }
       return () => {
           
       }
   }, [link])
   return ( 
        <div className="video-player">
            <video ref={video}controls></video>
        </div>
     );
}
 
export default Player;
