import React, {useState} from 'react';
import './App.css';
import Player from "./components/Player/Player";
import Footer from "./components/Footer/Footer";
import Volume from "./components/Volume/Volume";
import {connect} from "react-redux";
import SongInfo from "./components/SongInfo/SongInfo";
import {Like} from "./redux/reducer";

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
                    <Player/>
                    <Footer enable={enable} isLike={props.isLike} Like={props.Like}/>
                </div>
            </article>
        </main>
    );
}

const mapStateToProps = (state) => ({
    image: state.image,
    name: state.name,
    isLike: state.isLike
})

export default connect(mapStateToProps, {Like})(App);
