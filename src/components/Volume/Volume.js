import React from 'react';
import style from "./Volume.module.css"

const Volume = (props) => {
    return (
        <div className={style.volume}>
            <a href="#" className={style.close} onClick={props.disable}><i className="fa fa-chevron-down"/></a>
            <div className={style.volumeInner}>
                <i className="fa fa-volume-down"/>
                <input className="volume-slider" type="range" min="0" max="100" value="10" id="fader"
                 step="1"/>
                <i className="fa fa-volume-up"/>
            </div>
        </div>
    )
}

export default Volume