import Banner from "../components/homeComponents/Banner";
import ImageSec from "../components/homeComponents/ImageSec";
import WeekPics from "../components/homeComponents/WeekPics";
import LegoTabs from "../components/homeComponents/tabs/LegoTabs";
import pageTitle from "../hooks/pageTitle";

const Home = () => {

    pageTitle('Lego Store | Home');

    return (
        <div className="container md:mx-auto">
            <hr className="border border-sky-300 my-10" />
            <Banner></Banner>
            <hr className="border border-sky-300 my-10" />
            <ImageSec></ImageSec>
            <hr className="border border-sky-300 my-10" />
            <LegoTabs></LegoTabs>
            <hr className="border border-sky-300 my-10" />
            <WeekPics></WeekPics>
        </div>
    );
};

export default Home;