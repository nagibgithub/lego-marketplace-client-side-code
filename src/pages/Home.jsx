import Banner from "../components/homeComponents/Banner";
import ImageSec from "../components/homeComponents/ImageSec";
import MarqueeSec from "../components/homeComponents/MarqueeSec";

const Home = () => {
    return (
        <div className="container md:mx-auto">
            <hr className="border border-sky-300 my-10" />
            <Banner></Banner>
            <hr className="border border-sky-300 my-10" />
            <MarqueeSec></MarqueeSec>
            <hr className="border border-sky-300 my-10" />
            <ImageSec></ImageSec>
            <hr className="border border-sky-300 my-10" />
        </div>
    );
};

export default Home;