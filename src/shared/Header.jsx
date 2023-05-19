import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../contexts/AuthProvider";
import { useContext, useState } from "react";

const Header = () => {
    const [isTrue, setTrue] = useState(false);
    console.log(isTrue);

    const handleSetTrue = () => {
        setTrue(!isTrue);
        console.log(isTrue);
    };

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
    }


    const navBarData = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "All Toys", path: "/all_toys" },
        // { id: 3, title: "My Toys", path: "/my_toys" },
        { id: 4, title: "About Us", path: "/about" },
        { id: 5, title: "Blog", path: "/blog" },
    ];

    const navBar = <>{navBarData.map(pd => <li key={pd.id}><NavLink className={({ isActive, isPending }) => isActive ? "navActive" : isPending ? "navPending" : "navInactive"} to={pd.path}>{pd.title}</NavLink></li>)}</>

    return (
        <>
            <nav className="md:w-full px-2 justify-between grid grid-cols-3 md:grid-cols-6 md:mx-auto items-center shadow-lg">
                <div className="dropdown col-span-1 md:hidden">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FontAwesomeIcon icon={faBars} className="text-sky-600" size="2xl" />
                    </label>
                    <ul tabIndex={0} className="menu border border-sky-400 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1">
                        {
                            navBar
                        }
                    </ul>
                </div>
                <div className="col-span-1 flex justify-center md:justify-start">
                    <Link to={'/'}><img className="md:w-24 m-2 md:flex justify-start w-20 cursor-pointer" src={logo} alt="" /></Link>
                </div>
                <div className="md:col-span-4 hidden md:grid">
                    <ul className="hidden md:flex justify-center text-lg text-sky-600">{navBar}</ul>
                </div>
                <div className="flex justify-end items-center col-span-1">
                    {
                        user ?
                            <div className='flex items-center relative'>
                                <Link to={'/add_toy'}><button className="btn-n">Add a Toy <FontAwesomeIcon /></button></Link>
                                <div className="flex items-center">
                                    {
                                        user.photoURL ?
                                            <div data-tip={user.displayName} className='tooltip tooltip-left'>
                                                <img onClick={handleSetTrue} className="cursor-pointer rounded-full m-2 border-sky-300 w-14 border-4" src={user.photoURL} alt="user photo" />
                                            </div>
                                            :
                                            <div data-tip={user.displayName || user.email} className='tooltip tooltip-left'><FontAwesomeIcon onClick={handleSetTrue} className='w-12 h-12 text-gray-700 cursor-pointer' icon={faCircleUser} /></div>
                                    }
                                </div>
                                <div className={`${isTrue ? "contents" : "hidden"}`}>
                                    <ul className="absolute top-14 right-0 border bg-white border-sky-400 mt-3 p-2 shadow rounded-box min-w-max gap-1">
                                        <li><Link to={'/my_toys'}><button className="btn-n">My Toys</button></Link></li>
                                        <hr className="border my-1 border-sky-300" />
                                        <li><button onClick={handleLogout} className="btn-n">Log Out</button></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <Link to={'/login'}><button className="btn-n">Log In</button></Link>
                    }
                </div>
            </nav>
        </>
    );
};

export default Header;