import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {

    const navBarData = [
        { id: 1, title: "Home", path: "/" },
        { id: 2, title: "All Toys", path: "/all_toys" },
        { id: 3, title: "My Toys", path: "/my_toys" },
        { id: 4, title: "About Us", path: "/about" },
        { id: 5, title: "Blog", path: "/blog" },
    ];

    const navBar = <>{navBarData.map(pd => <li key={pd.id}><NavLink className={({ isActive, isPending }) => isActive ? "navActive" : isPending ? "navPending" : "navInactive"} to={pd.path}>{pd.title}</NavLink></li>)}</>

    return (
        <nav className="w-full justify-between grid grid-cols-6 mx-auto items-center">
            <div className="col-span-1">
                <Link to={'/'}><img className="w-36 cursor-pointer" src={logo} alt="" /></Link>
            </div>
            <div className="col-span-4">
                <ul className="flex gap-1 justify-center">{navBar}</ul>
            </div>
            <div className="flex justify-end col-span-1">
                <Link to={'/login'}><button className="btn-n">Log In</button></Link>
            </div>
        </nav>
    );
};

export default Header;