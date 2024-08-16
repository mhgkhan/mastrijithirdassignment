import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomUser from "../pages/RandomUser";
import Header from "./Header";
import RandomJookies from "../pages/RandomJookies";
import Catlisting from "../pages/Catlisting";

export default function Bridge() {
    return <>

        <BrowserRouter>

            <Header />
            <Routes>
                <Route path="/" element={<RandomUser />} />
                <Route path="/random-jokes" element={<RandomJookies />} />
                <Route path="/cats-listing" element={<Catlisting />} />
            </Routes>


        </BrowserRouter>

    </>
}
