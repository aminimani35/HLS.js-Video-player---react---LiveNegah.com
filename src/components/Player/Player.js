import {useEffect,useRef,useState} from 'react';
import Hls from 'hls.js';
import './Player.css';


const Player = ({link}) => {
    const [qLevels,setQLevels] = useState([])
   const video = useRef();
   useEffect(() => {
    if(Hls.isSupported()){
        const hls = new Hls();
        hls.loadSource(link);
        hls.attachMedia(video.current);
   
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            setQLevels(hls.levels)
            console.log(hls.levels,'state');
            if(hls.levels.length!==0){
                setQLevels(hls.levels)
                console.log(qLevels);
            }
          });
     }
   }, [link])
   return ( 
        <div className="video-player">
            <video ref={video}controls></video>
        </div>
     );
}
 
export default Player;
