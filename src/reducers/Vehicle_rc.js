const vehicleReducer = (state = [], action) => {
    switch(action.type) {
        case "VEHICLE_YES":
            return state = [1];
        case "VEHICLE_NO":
            return state = [2];
        case "VEHICLE_BACK":
            return state = ["BACK"];
        case "RESET_VEHICLE":
            return [];
        default:
            return state;
    }
}

export default vehicleReducer;