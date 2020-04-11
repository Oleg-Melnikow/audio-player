import React, {useState} from 'react';
import Player from "./Player";

const PlayerContainer = (props) => {

    let [togglePlayPause, setTogglePlayPause] = useState(false)

    let play = () => {
        props.PlaySong()
        setTogglePlayPause(true)
    }

    let pause = () => {
        props.PauseSong()
        setTogglePlayPause(false)
    }

    let stop = () => {
        props.StopSong()
        setTogglePlayPause(false)
    }

    let times = (secs) => {
        let min = Math.floor(secs / 60)
        let sec = Math.round(secs % 60);
        min = (min < 10) ? `0${min}` : `${min}`;
        sec = (sec < 10) ? `0${sec}` : `${sec}`;
        return `${min}:${sec}`
    }

    let timeStart = times(props.time)
    let time = props.fullTime ? times(props.fullTime) : "00:00"

    return (
        <Player timeStart={timeStart} time={time} times={times} togglePlayPause={togglePlayPause}
                stop={stop} pause={pause} play={play}/>
    )
}

export default PlayerContainer