import React, {useState} from 'react';
import style from "./Player.module.css"
import mus from "./music.mp3"

const Player = () => {

    let internal = null
    let audio = new Audio(mus)
    audio.preload = "auto"
    let [time, setTime] = useState("00:00")
    let [timeStart, setTimeStart] = useState("00:00")
    let [togglePlayPause, setTogglePlayPause] = useState(false)

    let play = () => {
        internal = setInterval(()=>{console.log("11")},1000)
        setTogglePlayPause(true)
    }

    let pause = () => {
        clearInterval(internal)
    }

    let stop = () => {
        audio.pause();
        audio.currentTime = 0.0;
    }

    let times = (secs) => {
        let min = Math.floor(secs / 60)
        let sec = Math.round(secs % 60);
        min = (min < 10) ? `0${min}` : `${min}`;
        sec = (sec < 10) ? `0${sec}` : `${sec}`;
        return `${min}:${sec}`
    }

    return (
        <div className={style.player}>
            <div className="start-time"><span id="time">{timeStart}</span></div>
            <i className="fas fa-backward"/>
            {!togglePlayPause
                ? <i className="fas fa-play" onClick={play}/>
                : <i className="fas fa-pause" onClick={pause}/>}
            <i className="fas fa-stop" onClick={stop}/>
            <i className="fas fa-forward"/>
            <div className="full-time"><span>{time}</span></div>
        </div>
    )
}

export default Player