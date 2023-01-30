import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gender from "./components/gender";
import Age from "./components/age";
import ComponentB from "./ComponentB";
import Price from "./components/price";
//import SecondPage from "./SecondPage";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gender/>}/>
                <Route path="/age" element={<Age/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/componentb" element={<ComponentB/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default Routers