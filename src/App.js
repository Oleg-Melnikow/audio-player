import React, {useState} from 'react';
import './App.css';
import Player from "./components/Player/Player";
import Footer from "./components/Footer/Footer";
import Volume from "./components/Volume/Volume";
import {connect} from "react-redux";
import SongInfo from "./components/SongInfo/SongInfo";
import {Like, LoopSong, PauseSong, PlaySong, StopSong, VolumeSong} from "./redux/reducer";
import SideMenu from "./components/SideMenu/SideMenu";

const App = (props) => {

    let [state, setState] = useState(false)

    let disable = () => {
        setState(false)
    }

    let enable = () => {
        setState(true)
    }

    let [index, SetIndex] = useState(-1);

    let showMenu = () => {
        SetIndex(3)
    }

    return (
        <main className="App">
            <article className="screen">
                <div className="bar-menu" onClick={showMenu}>
                    <i className="fas fa-bars"/>
                </div>
                <div className="songImage" style={{background: `url(${props.image}) no-repeat center`, backgroundSize: "cover"}}/>
                <div className="control-panel">
                    {state
                        ? <Volume state={state} disable={disable} volume={props.volume} VolumeSong={props.VolumeSong}/>
                        : null}
                    <SongInfo name={props.name}/>
                    <Player PlaySong={props.PlaySong} time={props.time} fullTime={props.fullTime}
                            PauseSong={props.PauseSong} StopSong={props.StopSong}/>
                    <Footer enable={enable} isLike={props.isLike} Like={props.Like}
                            LoopSong={props.LoopSong} isLoop={props.isLoop}/>
                </div>
                <SideMenu index={index} SetIndex={SetIndex}/>
            </article>
        </main>
    );
}

const mapStateToProps = (state) => ({
    image: state.image,
    name: state.name,
    time: state.time,
    fullTime: state.fullTime,
    isLike: state.isLike,
    volume: state.volume,
    isLoop: state.isLoop
})

export default connect(mapStateToProps, {PlaySong, PauseSong, StopSong, Like, VolumeSong, LoopSong})(App);
