import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Bridge(){
    return <>
    
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={""} />
        </Routes>
        
        
        </BrowserRouter>
    
    </>
}