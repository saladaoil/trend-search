const vehicleReducer = (state = null, action) => {
    switch(action.type) {
        case "VEHICLE_YES":
            return state = ["vehicle"];
        case "VEHICLE_NO":
            return state = ["other","vehicle_other"];
        case "VEHICLE_BACK":
            return state = ["BACK"];
        case "RESET_VEHICLE":
            return [];
        default:
            return state;
    }
}
  

export default vehicleReducer;