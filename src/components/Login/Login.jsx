import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ login, setLogin }) => {
    const loginBtnMenuNavigate = useNavigate();

    const loginBtnMenu = () => {
        console.log("test");

        if (login === true) {
            setLogin(false)
            loginBtnMenuNavigate("/")
        }
        else {
            loginBtnMenuNavigate("/LoginPage")
        }
    }
    return (<div>
        <div className="bg-gray-600 w-[450px] m-[10px] text-white p-[10px] ">
            <h1 className="text-[30px]">Your are currently {login === true ? " logged In" : "Logged Out"}</h1>
        </div>
        <button onClick={loginBtnMenu} className="z-10 btn btn-accent m-[30px] " >click to {login === false ? "Login" : "LogOut"}</button>
    </div>
    );
}

export default Login;