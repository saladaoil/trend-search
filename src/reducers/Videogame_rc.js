const videogameReducer = (state = null, action) => {
    switch(action.type) {
        case "VIDEOGAME_YES":
            return state = ["videogame"];
        case "VIDEOGAME_NO":
            return state = ["other", "videogame_other"];
        case "RESET_VIDEOGAME":
            return state = [];
        default:
            return state;
    }
}

export default videogameReducer;