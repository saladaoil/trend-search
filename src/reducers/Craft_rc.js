const craftReducer = (state = [], action) => {
    switch(action.type) {
        case "CRAFT_YES":
            return state = [1];
        case "CRAFT_NO":
            return state = [2];
        case "CRAFT_BACK":
            return state = ["BACK"];
        case "RESET_CRAFT":
            return [];
        default:
            return state;
    }
}

export default craftReducer;