import { BrowserRouter,Routes, Route } from "react-router-dom";
import Gender from "./components/Gender";
import Age from "./components/Age";
import Price from "./components/Price";
import Category from "./components/Category"
import Result from "./components/Result";
import CategoryResult from "./components/Category_Result"


import Gender2 from "./components/Gender2";

const homeUrl = process.env.PUBLIC_URL;

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${homeUrl}/`} element={<Gender2/>}/>
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