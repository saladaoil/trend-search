const otherReducer = (state = null, action) => {
    switch(action.type) {
        case "OTHER":
            return state = "その他";
        case "RESET_OTHER":
            return state = [];
        default:
            return state;
    }
}

export default otherReducer;