const stuffedtoyReducer = (state = null, action) => {
    switch(action.type) {
        case "STUFFEDTOY_YES":
            return state = ["stuffedtoy"];
        case "STUFFEDTOY_NO":
            return state = ["other", "stuffedtoy_other"];
        case "STUFFEDTOY_BACK":
            return state = ["BACK"];
        case "RESET_STUFFEDTOY":
            return [];
        default:
            return state;
    }
}

export default stuffedtoyReducer;