import { BrowserRouter,Routes, Route } from "react-router-dom";
import Firstchoice from "./components/Basic/Firstchoice";
import Description from "./components/Basic/Description";
import Gender from "./components/trend_question/Gender";
import Age from "./components/trend_question/Age";
import Category from "./components/trend_question/Category";
import Result from "./components/trend_question/Result";
import CategoryResult from "./components/trend_question/Category_Result";
import Price from "./components/trend_question/Price";
import Exercise from "./components/trend_question/Exercise";
import Sport from "./components/trend_question/Sport";
import Game from "./components/trend_question/Game";
import Videogame from "./components/trend_question/Videogame";
import Vehicle from "./components/trend_question/BoyQuestion/Vehicle";
import Craft from "./components/trend_question/BoyQuestion/Craft";
import Doll from "./components/trend_question/GirlQuestion/Doll";
import StuffedToy from "./components/trend_question/GirlQuestion/StuffedToy"
import Pregender from "./components/preference_question/Pre_gender"
import Preselect from "./components/preference_question/Pre_select"
import Pregenre from "./components/preference_question/Pre_genre"
import Preresult from "./components/preference_question/pre_result"

// import Gender from "./components/Basic/Gender"
// import Age from "./components/Basic/Age";
// import Category from "./components/Category"
// import Result from "./components/Result";
// import CategoryResult from "./components/Category_Result"
// import Price from "./components/Price"
// import Exercise from "./components/Basic/Exercise";
// import Sport from "./components/Basic/Sport";
// import Game from "./components/Basic/Game";
// import Videogame from "./components/Basic/Videogame";
// import Doll from "./components/GirlQuestion/Doll";
// import Craft from "./components/BoyQuestion/Craft";
// import StuffedToy from "./components/GirlQuestion/StuffedToy";
// import Vehicle from "./components/BoyQuestion/Vehicle";


const homeUrl = process.env.PUBLIC_URL;

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${homeUrl}/`} element={<Description/>}/>
                <Route path={`${homeUrl}/firstchoice`} element={<Firstchoice/>}/>
                <Route path={`${homeUrl}/gender`} element={<Gender/>}/>
                <Route path={`${homeUrl}/age`} element={<Age/>}/>
                <Route path={`${homeUrl}/exercise`} element={<Exercise/>}/>
                <Route path={`${homeUrl}/sport`} element={<Sport/>}/>
                <Route path={`${homeUrl}/game`} element={<Game/>}/>
                <Route path={`${homeUrl}/videogame`} element={<Videogame/>}/>
                <Route path={`${homeUrl}/vehicle`} element={<Vehicle/>}/>
                <Route path={`${homeUrl}/craft`} element={<Craft/>}/>
                <Route path={`${homeUrl}/doll`} element={<Doll/>}/>
                <Route path={`${homeUrl}/stuffedtoy`} element={<StuffedToy/>}/>
                <Route path={`${homeUrl}/result`} element={<Result/>}/>
                <Route path={`${homeUrl}/category`} element={<Category/>}/>
                <Route path={`${homeUrl}/category_result`} element={<CategoryResult/>}/>
                <Route path={`${homeUrl}/price`} element={<Price/>}/>
                <Route path={`${homeUrl}/pregender`} element={<Pregender/>}/>
                <Route path={`${homeUrl}/preselect`} element={<Preselect/>}/>
                <Route path={`${homeUrl}/pregenre`} element={<Pregenre/>}/>
                <Route path={`${homeUrl}/preresult`} element={<Preresult/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default Routers


// import Firstchoice from "../basic/Firstchoice";
// import Description from "../basic/Description";

// import { BrowserRouter,Routes, Route } from "react-router-dom";
// import Gender from "../components/Gender";
// import Age from "../components/Age";
// import Category from "../components/Category"
// import Price from "../components/Price"
// import Result from "../components/Result";
// import CategoryResult from "../components/Category_Result"

// //prefarence（好み）
// import PreferenceSelect from "../preference/PreferenceSelect";
// import CategoryQestion from "../preference/CategoryQestion";
// import CategoryQestion2 from "../preference/CategoryQestion2";

// const homeUrl = process.env.PUBLIC_URL;

// const Routers = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path={`${homeUrl}/`} element={<Description/>}/>
//                 <Route path={`${homeUrl}/firstchoice`} element={<Firstchoice/>}/>

//                 <Route path={`${homeUrl}/gender`} element={<Gender/>}/>
//                 <Route path={`${homeUrl}/age`} element={<Age/>}/>
//                 <Route path={`${homeUrl}/price`} element={<Price/>}/>
//                 <Route path={`${homeUrl}/result`} element={<Result/>}/>
//                 <Route path={`${homeUrl}/category`} element={<Category/>}/>
//                 <Route path={`${homeUrl}/category_result`} element={<CategoryResult/>}/>

//                 <Route path={`${homeUrl}/preferenceselect`} element={<PreferenceSelect/>}/>
//                 <Route path={`${homeUrl}/categoryqestion`} element={<CategoryQestion/>}/>
//                 <Route path={`${homeUrl}/categoryqestion2`} element={<CategoryQestion2/>}/>

//             </Routes>
//         </BrowserRouter>
//     )
// }
// export default Routers



