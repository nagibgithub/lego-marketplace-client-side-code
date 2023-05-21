import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="my-5 grid md:grid-cols-2 justify-center items-center">
            <div data-aos="fade-right" className="pt-5">
                <h1 className="font-n text-4xl underline my-2">Nagib LEGO Store: </h1>
                <h1 className="font-n text-5xl font-bold ">
                    <span className="text-sky-600">Where </span>
                    <span className="text-red-600">Creativity </span>
                    <span className="text-green-600">Takes </span>
                    <span className="text-yellow-600">Shapes! </span>
                </h1>
                <p className="pr-10 text-lg font-semibold text-sky-700 text-justify my-5">Welcome to Nagib LEGO Store, your go-to destination for all your LEGO needs. Explore our wide selection of LEGO sets, minifigures, and accessories, and unlock a world of endless possibilities. From iconic movie themes to imaginative cityscapes, we have the bricks to bring your dreams to life. Join us at Nagib LEGO Store and let your creativity soar!</p>
                <Link to={'/all_toys'}><button className="btn-n">Explore the Lego World</button></Link>
            </div>
            <div data-aos="fade-right" className="flex justify-end">
                <img src="https://i.ibb.co/5xzP8gw/Untitled.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;