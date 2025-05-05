import { useReducer, useRef, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Posts from "../Pages/Posts/Posts";
import Products from "../Pages/Products/Products";
import Menu from "../Menu/Menu";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../login/Login";
import LoginPage from "../Pages/LoginPage/LoginPage";

const App = () => {
    let [login, setLogin] = useState(false);
    return (

        <BrowserRouter
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}>
            <Menu login={login} setLogin={setLogin} />

            <Login login={login} setLogin={setLogin} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/loginPage" element={<LoginPage login={login} setLogin={setLogin} />} />
                <Route path="/products" element={login === true ? <Products /> : <Navigate to="/" />} />
                <Route path=":id" element={<NotFound />} />
            </Routes>
        </BrowserRouter >
    );
};

export default App;
