import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Slider from "../../Slider/Slider";

const LoginPage = ({ login, setLogin }) => {
    const navigate = useNavigate();

    const myRef = useRef();
    const loginBtnHandler = () => {
        navigate("/");
        setLogin(true);
    }

    return (<div>
        <Slider />
        <div className="m-[10px] p-[10px] mx-auto flex items-center bg-[#2b2b2b] flex-col w-[50%] rounded-2xl">
            <h1 className="text-white text-[40px] mb-[35px] " > Login Please </h1 >
            <input type="text" className="p-[10px] w-[230px] mb-[25px] border-3 border-accent text-white" placeholder=" Enter Your User Name" />
            <input type="text" className="p-[10px] w-[230px] mb-[25px] border-3 border-accent text-white" placeholder=" Enter Your Password Name" />
            <button className="btn btn-accent" onClick={loginBtnHandler} >Login</button>
        </div >
    </div>);
}

export default LoginPage;