import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gender from "./components/gender";
import Age from "./components/age";
import ComponentB from "./ComponentB";
import Price from "./components/price";
import Qresult from "./components/Qresult";


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gender/>}/>
                <Route path="/age" element={<Age/>}/>
                <Route path="/price" element={<Price/>}/>
                <Route path="/componentb" element={<ComponentB/>}/>
                <Route path="/qresult" element={<Qresult/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default Routers