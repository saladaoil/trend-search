const stuffedtoyReducer = (state = [], action) => {
    switch(action.type) {
        case "STUFFEDTOY_YES":
            return state = [1];
        case "STUFFEDTOY_NO":
            return state = [2];
        case "STUFFEDTOY_BACK":
            return state = ["BACK"];
        case "RESET_STUFFEDTOY":
            return [];
        default:
            return state;
    }
}

export default stuffedtoyReducer;