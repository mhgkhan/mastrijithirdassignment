import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomUser from "../pages/RandomUser";
import Header from "./Header";

export default function Bridge() {
    return <>

        <BrowserRouter>

            <Header />
            <Routes>
                <Route path="/" element={<RandomUser />} />
                <Route path="/random-jokes" element={<RandomUser />} />
                <Route path="/cats-listing" element={<RandomUser />} />
            </Routes>


        </BrowserRouter>

    </>
}
