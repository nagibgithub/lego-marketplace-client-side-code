import { Link, useRouteError } from "react-router-dom";
import pageTitle from "../hooks/pageTitle";

const ErrorPage = () => {

    pageTitle('Lego Store | Error');

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="min-h-screen flex flex-col justify-center items-center">
            <p className="text-red-600 font-bold">Sorry, an unexpected error has occurred.</p>
            <img className="w-72" src="https://c1.wallpaperflare.com/preview/286/573/109/error-not-found-404-lego.jpg" alt="" />
            <Link to={'/'}><button className="px-4 py-2 mb-5 mt-2 bg-sky-500 rounded-md text-white hover:bg-sky-600 active:bg-sky-700">Go to Home Page</button></Link>
            <div className="text-center">
                <i className="font-bold text-center text-xl">{error.data}</i>
                <br />
                <i className="font-bold text-center text-xl">Page is {error.statusText || error.message}</i>
                {
                    error.status && <p className="text-[#ff0000] text-lg my-2 py-2 font-black tracking-wide">Error Status: {error.status}</p>
                }
            </div>
        </div>
    );
}

export default ErrorPage;