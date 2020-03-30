import React from 'react';
import style from "./Player.module.css"

const Player = () => {
    return (
        <div className={style.player}>
            <div className="start-time"><span>00:00</span></div>
            <i className="fas fa-backward"/>
            <i className="fas fa-play"/>
            <i className="fas fa-stop"/>
            <i className="fas fa-forward"/>
            <div className="full-time"><span>04:00</span></div>
        </div>
    )
}

export default Player