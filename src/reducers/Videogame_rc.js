const videogameReducer = (state = [], action) => {
    switch(action.type) {
        case "VIDEOGAME_YES":
            return state = [1,"はい"];
        case "VIDEOGAME_NO":
            return state = [2,"いいえ"];
        default:
            return state;
    }
}

export default videogameReducer;