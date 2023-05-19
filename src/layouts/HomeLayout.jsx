import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const HomeLayout = () => {
    return (
        <div className="container mx-auto min-h-screen flex flex-col justify-between">
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;