import Firstchoice from "../Basic/Firstchoice";
import Description from "../Basic/Description";

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Gender from "../components/Gender";
import Age from "../components/Age";
import Category from "../components/Category"
import Price from "../components/Price"
import Result from "../components/Result";
import CategoryResult from "../components/Category_Result"


import QestionSelect from "../preference/QuestionSelect";


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

                <Route path={`${homeUrl}/qestionselect`} element={<QestionSelect/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers