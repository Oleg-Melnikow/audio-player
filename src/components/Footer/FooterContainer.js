import React from 'react';
import Footer from "./Footer";

const FooterContainer = (props) => {

    let like = () => {
        props.Like(!props.isLike)
    }

    let loop = () =>{
        props.LoopSong(!props.isLoop)
    }

    return <Footer like={like} isLike={props.isLike} loop={loop} isLoop={props.isLoop} enable={props.enable}/>
}

export default FooterContainer