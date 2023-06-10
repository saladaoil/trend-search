const exerciseReducer = (state = [], action) => {
    switch(action.type) {
        case "EXERCISE_YES":
            return state = [1,"はい"];
        case "EXERCISE_NO":
            return state = [2,"いいえ"];
        default:
            return state;
    }
}

export default exerciseReducer;