import React, {useState} from 'react';
import Volume from "./Volume";


const VolumeContainer = (props) => {

    let [volume, setVolume] = useState(Math.round(props.volume*100))

    let changeVolume = (e) => {
        setVolume(e.currentTarget.value)
        props.VolumeSong(e.currentTarget.value/100)
    }

    let mute = () => {
        setVolume(0)
        props.VolumeSong(0)
    }

    let unmute = () => {
        setVolume(100)
        props.VolumeSong(1)
    }

    return <Volume volume={volume} changeVolume={changeVolume} disable={props.disable}
                   mute={mute} unmute={unmute}/>
}

export default VolumeContainer