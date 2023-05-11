const ageReducer = (state = [], action) => {
    switch(action.type) {
        case "AGE1":
            return state = [4,6,"幼稚園"];
        case "AGE2":
            return state = [6,8,"小学生（低学年）"];
        case "AGE3":
            return state = [8,10,"小学生（中学年）"];
        case "AGE4":
            return state = [10,12,"小学生（高学年）"];
        case "AGE5":
            return state = [12,15,"中学生"];
        case "AGE6":
            return state = [1,15,"選択なし"];
        default:
            return state;
    }
}

export default ageReducer;