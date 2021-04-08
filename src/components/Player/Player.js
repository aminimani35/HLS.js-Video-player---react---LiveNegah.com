import {useEffect,useState,useRef} from 'react';
import Hls from 'hls.js';
import './Player.css';


const Player = () => {
    const [qLevels,setQLevels] = useState([])
    const [url,setUrl] = useState("https://livenegah01.freecdn.io/hldyqIOcLcXIaUdyFIOcwO5pQnbHwO5p6nbHtWas/V2QwdlRTcnZncU1qVi9qNTBReXFCQT09/li_V2QwdlRTcnZncU1qVi9qNTBReXFCQT09_X5cuKyxNBMLq9S8yTrOr_2021-3-8-15-34-32_,240,360,480,720,.mp4.urlset/master.m3u8");

   const video = useRef();
    const hls = new Hls();
    const videoPlayer = (url)=>{
        if(Hls.isSupported()){
       
            hls.loadSource(url);
            hls.attachMedia(video.current);
            // hls.autoLevelEnabled= false;
       
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                setQLevels(hls.levels)
    
                if(hls.levels.length !== 0){
                    setQLevels(hls.levels)
                    
                }
              });
              
         }
    }
   useEffect(() => {
    videoPlayer(url)
    console.log(hls.currentLevel);
   }, [url])

   return ( 
        <div className="video-player">
            {/* Video Container */}
            <video ref={video} preload controls></video>
           
            <div className="btn-list">

            {qLevels.map((level,index)=>{
                return <button onClick={()=>setUrl(level.url[0])} className="btn-quality-level" key={index} label={level.height} src={level.url}>{level.height}</button>
            })};

            </div>
        </div>
     );
}
 
export default Player;
// onClick={()=>{
//     setUrl(level.url[0])
//     console.log(url);
    
// }}