const vehicleReducer = (state = null, action) => {
    switch(action.type) {
        case "VEHICLE_YES":
            return state = "乗り物";
        case "VEHICLE_NO":
            return state = "その他";
        case "VEHICLE_BACK":
            return state = "BACK";
        case "RESET_VEHICLE":
            return [];
        default:
            return state;
    }
}

export default vehicleReducer;