import { BrowserRouter,Routes, Route } from "react-router-dom";
import Gender from "./components/Gender";
import Age from "./components/Age";
import Price from "./components/Price";
import Result from "./components/Result";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gender/>}/>
                <Route path="/age" element={<Age/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/result" element={<Result/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers