const sportReducer = (state = [], action) => {
    switch(action.type) {
        case "SPORT_YES":
            return state = [1,"はい"];
        case "SPORT_NO":
            return state = [2,"いいえ"];
        case "RESET_SPORT":
           return [];
        default:
            return state;
    }
}

export default sportReducer;