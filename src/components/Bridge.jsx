import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomUser from "../pages/RandomUser";

export default function Bridge(){
    return <>
    
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<RandomUser />} />
            <Route path="/random-jokes" element={<RandomUser />} />
            <Route path="/cats-listing" element={<RandomUser />} />
        </Routes>
        
        
        </BrowserRouter>
    
    </>
}