const dollReducer = (state = null, action) => {
    switch(action.type) {
        case "DOLL_YES":
            return state = ["doll"];
        case "DOLL_NO":
            return state = ["other", "doll_other"];
        case "DOLL_BACK":
            return state = ["BACK"];
        case "RESET_DOLL":
            return [];
        default:
            return state;
    }
}

export default dollReducer;