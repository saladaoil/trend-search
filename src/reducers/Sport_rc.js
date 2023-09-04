const sportReducer = (state = null, action) => {
    switch(action.type) {
        case "SPORT_YES":
            return state = ["sport"];
        case "SPORT_NO":
            return state = ["other", "sport_other"];
        case "RESET_SPORT":
           return [];
        default:
            return state;
    }
}

export default sportReducer;