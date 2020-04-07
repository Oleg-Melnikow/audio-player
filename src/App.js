import React, {useState} from 'react';
import './App.css';
import Player from "./components/Player/Player";
import Footer from "./components/Footer/Footer";
import Volume from "./components/Volume/Volume";
import {connect} from "react-redux";
import SongInfo from "./components/SongInfo/SongInfo";
import {Like, PauseSong, PlaySong, StopSong} from "./redux/reducer";

const App = (props) => {

    let [state, setState] = useState(false)

    let disable = () => {
        setState(false)
    }

    let enable = () => {
        setState(true)
    }

    return (
        <main className="App">
            <article className="screen">
                <div className="songImage" style={{background: `url(${props.image}) no-repeat center`, backgroundSize: "cover"}}/>
                <div className="control-panel">
                    {state
                        ? <Volume state={state} disable={disable}/>
                        : null}
                    <SongInfo name={props.name}/>
                    <Player PlaySong={props.PlaySong} time={props.time} fullTime={props.fullTime}
                            PauseSong={props.PauseSong} StopSong={props.StopSong}/>
                    <Footer enable={enable} isLike={props.isLike} Like={props.Like}/>
                </div>
            </article>
        </main>
    );
}

const mapStateToProps = (state) => ({
    image: state.image,
    name: state.name,
    time: state.time,
    fullTime: state.fullTime,
    isLike: state.isLike
})

export default connect(mapStateToProps, {PlaySong, PauseSong, StopSong, Like})(App);
