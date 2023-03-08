const priceReducer = (state = [], action) => {
    switch(action.type) {
        case "PRICE1":
            return state = [0,1500,"0~1500円"];
        case "PRICE2":
            return state = [1500,3000,"1500~3000円"];
        case "PRICE3":
            return state = [3000,4500,"3000~4500円"];
        case "PRICE4":
            return state = [4500,6000,"4500~6000円"];
        case "PRICE5":
            return state = [6000,100000,"6000~円"];
        case "PRICE6":
            return state = [0,100000,"すべて"];
        default:
            return state;
    }
}

export default priceReducer;