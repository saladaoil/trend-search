const genderReducer = (state = [], action) => {
    switch(action.type) {
        case "BOY":
            return state = [1,3,4,"男"];
        case "GIRL":
            return state = [2,3,4,"女"];
        case "ALL":
            return state = [0,0,0,"選択なし"];
        default:
            return state;
    }
}

export default genderReducer;




// const genderReducer = (state = [], action) => {
//     switch(action.type) {
//         case "BOY":
//             return state = [1,3,4,"男"];
//         case "GIRL":
//             return state = [2,3,4,"女"];
//         case "ALL":
//             return state = [3,3,3,"選択なし"];
//         default:
//             return state;
//     }
// }

// export default genderReducer;
