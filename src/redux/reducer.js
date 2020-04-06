const initialState = {
    image: require("../files/fromYesterday.jpg"),
    name: {nameSong: "From Yesterday", nameSinger: "30 Seconds to Mars"}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
