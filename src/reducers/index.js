import { combineReducers } from "redux";
import genderReducer from "./Gender_rc";
import ageReducer from "./Age_rc";
import priceReducer from "./Price_rc";
import categoryReducer from "./Category_rc";

const allReducers = combineReducers({
    gender: genderReducer,
    age: ageReducer,
    price: priceReducer,
    category: categoryReducer,
})

export default allReducers;