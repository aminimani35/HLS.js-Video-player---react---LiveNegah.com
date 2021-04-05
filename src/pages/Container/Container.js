import Player from "../../components/Player/Player"
import {useState} from 'react';
import './Container.css'
const Container = () => {
    const [link, setlink] = useState("https://livenegah01.freecdn.io/hldyqIOcLcXIaUdyFIOcwO5pQnbHwO5p6nbHtWas/V2QwdlRTcnZncU1qVi9qNTBReXFCQT09/li_V2QwdlRTcnZncU1qVi9qNTBReXFCQT09_X5cuKyxNBMLq9S8yTrOr_2021-3-8-15-34-32_,240,360,480,720,.mp4.urlset/master.m3u8")
    return ( 
        <div className="container">
            <Player link ={link}/>
        </div>
     );
}
 
export default Container;