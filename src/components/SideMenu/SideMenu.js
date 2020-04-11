import React from 'react';
import style from "./SideMenu.module.css"

const SideMenu = (props) => {

    let change = () => {
        props.SetIndex(-1)
    }

    return (
        <div className={style.sideMenu} style={{zIndex: props.index}}>
            <a href="#" className={style.close} onClick={change}>
                <i className="fa fa-angle-left"/>
            </a>
            <ul>
                <li>
                    <a href="#" className="side-popular-music"><i className="fa fa-list-ol fa-fw"/> Popular Music</a>
                </li>
                <li>
                    <a href="#" className="side-your-playlist"><i className="fa fa-music fa-fw"/> Your Playlists</a>
                </li>
                <li>
                    <a href="#" className="side-your-profile"><i className="fa fa-user fa-fw"/> Your Profile</a>
                </li>
                <li>
                    <a href="#" className="side-settings"><i className="fa fa-cog fa-fw"/> Settings</a>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;