import mus from "../files/fromyesterday.mp3"

const audio = new Audio(mus)

const PLAY_SONG = "Audio-Player/Song/PLAY_SONG";
const PAUSE_SONG = "Audio-Player/Song/PAUSE_SONG";
const STOP_SONG = "Audio-Player/Song/STOP_SONG";
const LIKE_SONG = "Audio-Player/Song/LIKE_SONG";
const VOLUME_SONG = "Audio-Player/Song/VOLUME_SONG";

const initialState = {
    time: audio.currentTime,
    fullTime: audio.duration,
    image: require("../files/fromYesterday.jpg"),
    name: {nameSong: "From Yesterday", nameSinger: "30 Seconds to Mars"},
    isLike: false,
    volume: audio.volume
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_SONG: {
            return {
                ...state,
                time: audio.currentTime,
                fullTime: audio.duration
            }
        }
        case PAUSE_SONG: {
            return {
                ...state,
                time: audio.currentTime
            }
        }
        case STOP_SONG: {
            return {
                ...state,
                time: audio.currentTime = 0.0
            }
        }
        case LIKE_SONG: {
            return {
                ...state,
                isLike: action.like
            }
        }
        case VOLUME_SONG: {
            debugger
            return {
                ...state,
                volume: audio.volume = action.volume
            }
        }
        default:
            return state;
    }
}

let timer = null

export const Like = (like) => ({type: LIKE_SONG, like});
export const VolumeSong = (volume) => ({type: VOLUME_SONG, volume});
const PlaySongSuccess = () => ({type: PLAY_SONG});
const PauseSongSuccess = () => ({type: PAUSE_SONG});
const StopSongSuccess = () => ({type: STOP_SONG});

export const PlaySong = () => (dispatch) => {
    timer = setInterval(() => {
        dispatch(PlaySongSuccess())
    }, 1000)
    audio.play()
}

export const PauseSong = () => (dispatch) => {
    clearInterval(timer)
    dispatch(PauseSongSuccess())
    audio.pause()
}

export const StopSong = () => (dispatch) => {
    clearInterval(timer)
    dispatch(StopSongSuccess())
    audio.pause()
}