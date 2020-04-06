const LIKE_SONG = "Audio-Player/Song/LIKE_SONG";

const initialState = {
    image: require("../files/fromYesterday.jpg"),
    name: {nameSong: "From Yesterday", nameSinger: "30 Seconds to Mars"},
    isLike: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE_SONG: {
            return {
                ...state,
                isLike: action.like
            }
        }
        default:
            return state;
    }
}

export const Like = (like) => ({type: LIKE_SONG, like});