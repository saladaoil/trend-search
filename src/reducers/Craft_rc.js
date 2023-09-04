const craftReducer = (state = null, action) => {
    switch(action.type) {
        case "CRAFT_YES":
            return state = ["craft"];
        case "CRAFT_NO":
            return state = ["other", "craft_other"];
        case "CRAFT_BACK":
            return state = ["BACK"];
        case "RESET_CRAFT":
            return [];
        default:
            return state;
    }
}

export default craftReducer;