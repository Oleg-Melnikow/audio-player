import React from 'react';
import style from "./Footer.module.css"

const Footer = (props) => {

    let like = () => {
        props.Like(!props.isLike)
    }

    return (
        <div className={style.footer}>
            <div className={style.like}>
                <input type="checkbox" id="like" onChange={like} checked={props.isLike}/>
                <label htmlFor="like">
                    <i className="far fa-heart"/>
                    <i className="fas fa-heart"/>
                </label>
            </div>
            <i className="fas fa-sync-alt"/>
            <i className="fas fa-volume-up" onClick={props.enable}/>
            <i className="fas fa-random"/>
        </div>
    )
}

export default Footer