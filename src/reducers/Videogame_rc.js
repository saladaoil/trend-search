const videogameReducer = (state = [], action) => {
    switch(action.type) {
        case "VIDEOGAME_YES":
            return state = ["ビデオゲーム"];
        case "VIDEOGAME_NO":
            return state = ["その他"];
        default:
            return state;
    }
}

export default videogameReducer;