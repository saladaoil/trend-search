const dollReducer = (state = [], action) => {
    switch(action.type) {
        case "DOLL_YES":
            return state = ["人形"];
        case "DOLL_NO":
            return state = ["その他"];
        case "DOLL_BACK":
            return state = ["BACK"];
        case "RESET_DOLL":
            return [];
        default:
            return state;
    }
}

export default dollReducer;