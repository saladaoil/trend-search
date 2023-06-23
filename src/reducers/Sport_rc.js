const sportReducer = (state = null, action) => {
    switch(action.type) {
        case "SPORT_YES":
            return state = "スポーツ";
        case "SPORT_NO":
            return state = "その他";
        case "RESET_SPORT":
           return [];
        default:
            return state;
    }
}

export default sportReducer;