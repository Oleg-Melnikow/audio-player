import React, {useState} from 'react';
import './App.css';
import PlayerContainer from "./components/Player/PlayerContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import VolumeContainer from "./components/Volume/VolumeContainer";
import {connect} from "react-redux";
import SongInfo from "./components/SongInfo/SongInfo";
import {VolumeSong} from "./redux/reducer";
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
                        ? <VolumeContainer state={state} disable={disable} volume={props.volume} VolumeSong={props.VolumeSong}/>
                        : null}
                    <SongInfo name={props.name}/>
                    <PlayerContainer/>
                    <FooterContainer enable={enable}/>
                </div>
                <SideMenu index={index} SetIndex={SetIndex}/>
            </article>
        </main>
    );
}

const mapStateToProps = (state) => ({
    image: state.image,
    name: state.name,
    volume: state.volume
})

export default connect(mapStateToProps, {VolumeSong})(App);
