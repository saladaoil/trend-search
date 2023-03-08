import { BrowserRouter,Routes, Route } from "react-router-dom";
import Gender from "./components/Gender";
import Age from "./components/Age";
import Price from "./components/Price";
import Category from "./components/Category"
import Result from "./components/Result";
import CategoryResult from "./components/Category_Result"

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gender/>}/>
                <Route path="/age" element={<Age/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/result" element={<Result/>}/>
                <Route path="/category" element={<Category/>}/>
                <Route path="/category_result" element={<CategoryResult/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers