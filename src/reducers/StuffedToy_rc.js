const stuffedtoyReducer = (state = null, action) => {
    switch(action.type) {
        case "STUFFEDTOY_YES":
            return state = "ぬいぐるみ";
        case "STUFFEDTOY_NO":
            return state = "その他";
        case "STUFFEDTOY_BACK":
            return state = "BACK";
        case "RESET_STUFFEDTOY":
            return [];
        default:
            return state;
    }
}

export default stuffedtoyReducer;