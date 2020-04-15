import React from 'react';
import Footer from "./Footer";
import {connect} from "react-redux";
import {Like, LoopSong} from "../../redux/reducer";

const FooterContainer = (props) => {

    let like = () => {
        props.Like(!props.isLike)
    }

    let loop = () =>{
        props.LoopSong(!props.isLoop)
    }

    return <Footer like={like} isLike={props.isLike} loop={loop} isLoop={props.isLoop} enable={props.enable}/>
}

const mapStateToProps = (state) => ({
    isLike: state.isLike,
    isLoop: state.isLoop
})

export default connect(mapStateToProps, {Like, LoopSong})(FooterContainer)