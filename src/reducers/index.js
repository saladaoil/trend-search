import { combineReducers } from "redux";
import genderReducer from "./Gender_rc";
import ageReducer from "./Age_rc";
import priceReducer from "./Price_rc";
import categoryReducer from "./Category_rc";
import exerciseReducer from "./Exercise_rc";
import sportReducer from "./Sport_rc";
import gameReducer from "./Game_rc";
import videogameReducer from "./Videogame_rc";
import vehicleReducer from "./Vehicle_rc";
import dollReducer from "./Doll_rc";
import craftReducer from "./Craft_rc";
import stuffedtoyReducer from "./StuffedToy_rc";
import otherReducer from "./Other_rc";
import resultReducer from "./Result_rc";
import genreReducer from "./Genre_rc";
import genreTypeReducer from "./GenreType_rc";

const allReducers = combineReducers({
    gender: genderReducer,
    age: ageReducer,
    price: priceReducer,
    category: categoryReducer,
    exercise: exerciseReducer,
    sport: sportReducer,
    game: gameReducer,
    videogame: videogameReducer,
    vehicle: vehicleReducer,
    doll: dollReducer,
    craft: craftReducer,
    stuffedtoy: stuffedtoyReducer,
    other: otherReducer,
    result: resultReducer,
    genre: genreReducer,
    genreType: genreTypeReducer
})

export default allReducers;