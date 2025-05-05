import { redirect, useNavigate, useParams } from "react-router-dom";

const NotFound = () => {
    let navigate = useNavigate()
    const redirectHandler = () => {
        navigate("/")
    }
    const { id } = useParams()

    return (<div className="flex justify-center">
        <div className="bg-[#2b2b2b] w-[45%] text-white border-2 border-gray-500 rounded-2xl p-[10px]">
            <h1 className=" text-center text-[40px] capitalize">The <span className="text-error">{id}</span> page does not exist</h1>
            <p className="text-[20px] my-[10px] capitalize">please double check url or contact to admins thanks.</p>

            <button onClick={redirectHandler} className=" btn btn-accent">back to main page </button>
        </div>
    </div>);
}

export default NotFound;