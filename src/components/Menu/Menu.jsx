import { NavLink } from "react-router-dom";

const Menu = ({ login, setLogin }) => {
    const popUpHandler = () => {
        if (login === false) {
            alert("You are not login,please login first")
        }
    }

    return (
        <div className="flex justify-center">
            <ul className="menu bg-gray-600 justify-center lg:menu-horizontal rounded-box w-screen text-white">
                <li>
                    <NavLink to="/" className={(navDate) => navDate.isActive ? "btn btn-success" : ""}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                        <span className="badge badge-xs">99+</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Posts" className={(navDate) => navDate.isActive ? "btn btn-error" : ""}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Posts
                        <span className="badge badge-xs ">NEW</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Products" onClick={popUpHandler} className={(navDate) => navDate.isActive ? "btn btn-info" : ""}>
                        Products (for memberships only)
                        <span className="badge badge-xs"></span>
                    </NavLink>
                </li>
            </ul>
        </div >
    );
}

export default Menu;