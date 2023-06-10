const dollReducer = (state = [], action) => {
    switch(action.type) {
        case "DOLL_YES":
            return state = ["doll"];
        case "DOLL_NO":
            return state = [2];
        case "DOLL_BACK":
            return state = ["BACK"];
        case "RESET_DOLL":
            return [];
        default:
            return state;
    }
}

export default dollReducer;