import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={style.footer}>
            <div>
                <input type="checkbox" id="like"/>
                <label htmlFor="like">
                    <i className="far fa-heart"/>
                    <i className="fas fa-heart"/>
                </label>
            </div>
            <i className="fas fa-sync-alt"/>
            <i className="fas fa-volume-up"/>
            <i className="fas fa-random"/>
        </div>
    )
}

export default Footer