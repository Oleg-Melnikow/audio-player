import React from 'react';
import style from "./Footer.module.css"

const Footer = (props) => {

    return (
        <div className={style.footer}>
            <div className={style.like}>
                <input type="checkbox" id="like" onChange={props.like} checked={props.isLike}/>
                <label htmlFor="like">
                    <i className="far fa-heart"/>
                    <i className="fas fa-heart"/>
                </label>
            </div>
            <div className={style.loop}>
                <input type="checkbox" id="loop" onChange={props.loop} checked={props.isLoop}/>
                <label htmlFor="loop">
                    <i className="fas fa-sync-alt"/>
                </label>
            </div>
            <i className="fas fa-volume-up" onClick={props.enable}/>
            <i className="fas fa-random"/>
        </div>
    )
}

export default Footer