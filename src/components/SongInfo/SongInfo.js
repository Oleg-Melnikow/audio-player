import React from 'react';
import style from "./SongInfo.module.css"

const SongInfo = (props) => {
    return (
        <div className={style.info}>
            <h4>{props.name.nameSong}</h4>
            <h3>{props.name.nameSinger}</h3>
        </div>
    )
}

export default SongInfo