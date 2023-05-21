import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import TermsConditions from "../pages/TermsConditions";
import PrivateRoute from "./PrivateRoute";
import AddMyToy from "../pages/AddMyToy";
import ToyDetails from "../pages/ToyDetails";
import UpdateLego from "../pages/UpdateLego";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout />,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                { path: "/", element: <Home />, },
                { path: "/login", element: <Login /> },
                { path: "/register", element: <Register /> },
                { path: "/blog", element: <Blog /> },
                { path: "/about", element: <AboutUs /> },
                { path: "/all_toys", element: <AllToys />, loader: () => fetch('https://b7a11-nagib-lego-server.vercel.app/all_legos') },
                { path: "/my_toys/:email", element: <PrivateRoute><MyToys /></PrivateRoute> },
                { path: "/terms_conditions", element: <TermsConditions /> },
                { path: "/add_toy", element: <PrivateRoute><AddMyToy /></PrivateRoute> },
                { path: "/update/:id", element: <PrivateRoute><UpdateLego /></PrivateRoute>, loader: ({ params }) => fetch(`https://b7a11-nagib-lego-server.vercel.app/legos/${params.id}`) },
                { path: "/legos/:id", element: <PrivateRoute><ToyDetails /></PrivateRoute>, loader: ({ params }) => fetch(`https://b7a11-nagib-lego-server.vercel.app/legos/${params.id}`) }

            ]
        }
    ]
);

export default router;