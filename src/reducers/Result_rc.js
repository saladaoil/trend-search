const resultReducer = (state = null, action) => {
    switch(action.type) {
        case "RESULT_BACK":
            return state = "BACK";
        case "RESET_RESULT":
            return state = [];
        default:
            return state;
    }
}

export default resultReducer;