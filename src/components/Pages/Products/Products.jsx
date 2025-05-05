import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
    let [products, setProducts] = useState(null);
    let [loading, setLoading] = useState(true);
    const fetchProducts = async () => {
        try {
            let data = await fetch("https://fakestoreapi.com/products");
            let res = await data.json();
            setProducts(res)
        } catch (error) {
            console.log(error.message);

        }

    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000)
        fetchProducts()
        return () => clearTimeout(timer);

    }, [])

    return (<div>
        <div className="flex justify-center mb-[30px]">
            <div className="bg-[#2b2b2b] w-[45%] text-white border-2 border-gray-500 rounded-2xl p-[10px]">
                <h1 className=" text-center text-[40px] capitalize">This is <span className="text-info"> Products</span> page</h1>
                <p className="text-[20px] mb-[10px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero dolorem odio iure
                    ducimus quibusdam temporibus? Sint, sapiente odit fugiat, libero consequuntur
                    perferendis corporis similique natus unde cum maxime fuga animi!
                </p>
                <NavLink className="btn btn-info ">Read-More</NavLink>
            </div>
        </div>
        <div className="flex justify-center flex-wrap gap-4 ">
            {loading === true ? <span className="loading loading-infinity  w-[200px]"></span> : products?.map((item) => {
                return <div key={item.id} className="bg-info p-[10px] w-[38%] text-gray-800 ">
                    <h1 className="text-[35px] font-bold line-clamp-1">{item.title}</h1>
                    <h2 className="text-[25px]">price : {item.price}</h2>
                    <p className="line-clamp-2">{item.description}</p>
                    <div className=" flex justify-center">
                        <img src={item.image} alt="" className="w-[50%] max-h-[400px] rounded-2xl" />
                    </div>
                </div>
            })}
     
        </div>
    </div>);
}

export default Products;