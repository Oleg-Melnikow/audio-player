import React, {useState} from 'react';
import style from "./Player.module.css"

const Player = (props) => {

    let [togglePlayPause, setTogglePlayPause] = useState(false)

    let play = () => {
        props.PlaySong()
        setTogglePlayPause(true)
    }

    let pause = () => {
        props.PauseSong()
        setTogglePlayPause(false)
    }

    let stop = () => {
        props.StopSong()
        setTogglePlayPause(false)
    }

    let times = (secs) => {
        let min = Math.floor(secs / 60)
        let sec = Math.round(secs % 60);
        min = (min < 10) ? `0${min}` : `${min}`;
        sec = (sec < 10) ? `0${sec}` : `${sec}`;
        return `${min}:${sec}`
    }

    let timeStart = times(props.time)
    let time = props.fullTime ? times(props.fullTime) : "00:00"

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