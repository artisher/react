import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Posts = () => {
    let [posts, setPosts] = useState(null);
    let [loading, setLoading] = useState(true);

    const fetchPost = async () => {
        try {
            let data = await fetch("https://jsonplaceholder.typicode.com/posts");
            let res = await data.json();
            setPosts(res)
        } catch (error) {
            console.log(error.message);

        }

    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000)
        fetchPost()
        return () => clearTimeout(timer);


    }, [])
    return (<div>
        <div className="flex justify-center mb-[30px]">
            <div className=" bg-[#2b2b2b] w-[45%] text-white border-2 border-gray-500 rounded-2xl p-[10px]">
                <h1 className=" text-center text-[40px] capitalize">This is <span className="text-error">Posts</span> page</h1>
                <p className="text-[20px] mb-[10px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolorem odio iure
                    ducimus quibusdam temporibus? Sint, sapiente odit fugiat, libero consequuntur
                    perferendis corporis similique natus unde cum maxime fuga animi!
                </p>
                <NavLink className="btn btn-error ">Read-More</NavLink>
            </div>
        </div>
        <div className="flex justify-center flex-wrap gap-4 ">
            {loading === true ? <span className="loading loading-infinity  w-[200px]"></span> : posts?.map((item) => {
                return <div key={item.id} className="bg-rose-400 p-[10px] w-[38%] text-gray-800 ">
                    <h1 className="text-[35px] font-bold line-clamp-1">{item.title}</h1>
                    <p className="line-clamp-2">{item.body}</p>

                </div>
            })}

          
        </div>
    </div>


    );
}

export default Posts;