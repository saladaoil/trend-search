const genderReducer = (state = "", action) => {
    switch(action.type) {
        case "MAN":
            return state = "男";
        case "WOMAN":
            return state = "女";
        default:
            return state;
    }
}

export default genderReducer;