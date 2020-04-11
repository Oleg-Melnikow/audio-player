import React from 'react';
import style from "./Player.module.css"

const Player = (props) => {
    return (
        <div className={style.player}>
            <div className="start-time"><span id="time">{props.timeStart}</span></div>
            <i className="fas fa-backward"/>
            {!props.togglePlayPause
                ? <i className="fas fa-play" onClick={props.play}/>
                : <i className="fas fa-pause" onClick={props.pause}/>}
            <i className="fas fa-stop" onClick={props.stop}/>
            <i className="fas fa-forward"/>
            <div className="full-time"><span>{props.time}</span></div>
        </div>
    )
}

export default Player