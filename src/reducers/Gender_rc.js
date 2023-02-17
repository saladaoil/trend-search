const genderReducer = (state = [], action) => {
    switch(action.type) {
        case "BOY":
            return state = [1,3,"男"];
        case "GIRL":
            return state = [2,3,"女"];
        case "ALL":
            return state = [3,0,"男女"];
        default:
            return state;
    }
}

export default genderReducer;