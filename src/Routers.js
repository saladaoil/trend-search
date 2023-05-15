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



import { BrowserRouter,Routes, Route } from "react-router-dom";
import Gender from "./components/Gender";
import Age from "./components/Age";
import Category from "./components/Category"
import Price from "./components/Price"
import Result from "./components/Result";
import CategoryResult from "./components/Category_Result"
import Firstchoice from "./components/Basic/Firstchoice";
import Description from "./components/Basic/Description";

const homeUrl = process.env.PUBLIC_URL;

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${homeUrl}/`} element={<Description/>}/>
                <Route path={`${homeUrl}/firstchoice`} element={<Firstchoice/>}/>
                <Route path={`${homeUrl}/gender`} element={<Gender/>}/>
                <Route path={`${homeUrl}/age`} element={<Age/>}/>
                <Route path={`${homeUrl}/price`} element={<Price/>}/>
                <Route path={`${homeUrl}/result`} element={<Result/>}/>
                <Route path={`${homeUrl}/category`} element={<Category/>}/>
                <Route path={`${homeUrl}/category_result`} element={<CategoryResult/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers