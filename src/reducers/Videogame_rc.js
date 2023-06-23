const videogameReducer = (state = null, action) => {
    switch(action.type) {
        case "VIDEOGAME_YES":
            return state = "ビデオゲーム";
        case "VIDEOGAME_NO":
            return state = "その他";
        case "RESET_VIDEOGAME":
            return state = [];
        default:
            return state;
    }
}

export default videogameReducer;