const ageReducer = (state = [], action) => {
    switch(action.type) {
        case "AGE1":
            return state = [1,3,"1~3"];
        case "AGE2":
            return state = [4,7,"4~7"];
        case "AGE3":
            return state = [8,11,"8~11"];
        case "AGE4":
            return state = [12,15,"12~15"];
        default:
            return state;
    }
}

export default ageReducer;