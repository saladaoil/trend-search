const priceReducer = (state = [], action) => {
    switch(action.type) {
        case "PRICE1":
            return state = [0,1500,"0~1500"];
        case "PRICE2":
            return state = [1500,3000,"1500~3000"];
        case "PRICE3":
            return state = [3000,4500,"3000~4500"];
        case "PRICE4":
            return state = [4500,6000,"4500~6000"];
        case "PRICE5":
            return state = [6000,100000,"6000~"];
        default:
            return state;
    }
}

export default priceReducer;