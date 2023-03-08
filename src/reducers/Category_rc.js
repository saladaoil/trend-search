const categoryReducer = (state = [], action) => {
    switch(action.type) {
        case "CATEGORY1":
            return state = [1,"おもちゃ"];
        case "CATEGORY2":
            return state = [2,"ゲーム"];
        case "CATEGORY3":
            return state = [3,"知育玩具"];
        case "CATEGORY4":
            return state = [4,"スポーツ"];
        case "CATEGORY5":
            return state = [5,"その他"];
        default:
            return state;
    }
}

export default categoryReducer;