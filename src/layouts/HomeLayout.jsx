import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Toaster } from 'react-hot-toast';

const HomeLayout = () => {
    return (
        <div className="container mx-auto min-h-screen flex flex-col justify-between">
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default HomeLayout;