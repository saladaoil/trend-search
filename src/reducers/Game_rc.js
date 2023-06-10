const gameReducer = (state = [], action) => {
    switch(action.type) {
        case "GAME_YES":
            return state = [1,"はい"];
        case "GAME_NO":
            return state = [2,"いいえ"];
        default:
            return state;
    }
}

export default gameReducer;