const ageReducer = (state = [], action) => {
    switch(action.type) {
        case "AGE1":
            return state = [1,3,"1~3歳"];
        case "AGE2":
            return state = [4,7,"4~7歳"];
        case "AGE3":
            return state = [8,11,"8~11歳"];
        case "AGE4":
            return state = [12,15,"12~15歳"];
        case "AGE5":
            return state = [1,15,"すべて"];
        default:
            return state;
    }
}

export default ageReducer;