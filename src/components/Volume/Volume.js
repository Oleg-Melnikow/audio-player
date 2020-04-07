import React, {useState} from 'react';
import style from "./Volume.module.css"

const Volume = (props) => {

    let [volume, setVolume] = useState(Math.round(props.volume*100))

    let changeVolume = (e) => {
        setVolume(e.currentTarget.value)
        props.VolumeSong(e.currentTarget.value/100)
    }

    return (
        <div className={style.volume}>
            <a href="#" className={style.close} onClick={props.disable}><i className="fa fa-chevron-down"/></a>
            <div className={style.volumeInner}>
                <i className="fa fa-volume-down"/>
                <input className="volume-slider" type="range" min="0" max="100"
                       onChange={changeVolume} value={volume} step="1"/>
                <i className="fa fa-volume-up"/>
                <span style={{width: "50px"}}>{volume}</span>
            </div>
        </div>
    )
}

export default Volume