import { NavLink } from "react-router-dom";
import Posts from "../Posts/Posts";

const Home = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-[#2b2b2b] w-[45%] text-white border-2 border-gray-500 rounded-2xl p-[10px]">
                <h1 className=" text-center text-[40px] capitalize">This is <span className="text-success"> home</span> page</h1>
                <p className="text-[20px] mb-[10px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolorem odio iure
                    ducimus quibusdam temporibus? Sint, sapiente odit fugiat, libero consequuntur
                    perferendis corporis similique natus unde cum maxime fuga animi!
                </p>
                <NavLink className="btn btn-success ">Read-More</NavLink>
            </div>
        </div>);
}

export default Home;