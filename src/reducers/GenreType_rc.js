const genreTypeReducer = (state = null, action) => {
    switch(action.type) {
        case "Charactor":
            return state = "1";
        case "Brand":
            return state = "2";
        case "ALL":
            return state = "0";
        default:
            return state;
    }
}

export default genreTypeReducer;
