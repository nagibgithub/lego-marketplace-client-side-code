import Marquee from "react-fast-marquee";

const ImageSec = () => {
    return (
        <div>
            <Marquee>
                <img className="mx-5" src="https://img.freepik.com/free-photo/smiley-mother-playing-with-her-son_23-2148443223.jpg" alt="" />
                <div>
                    <img className="my-5" src="https://img.freepik.com/free-photo/female-caucasian-teacher-little-girl-mom-daughter_155003-22374.jpg" alt="" />
                    <img className="my-5" src="https://img.freepik.com/free-photo/father-daughter-playing-educational-games-together_155003-3501.jpg" alt="" />
                </div>
                <img className="mx-5" src="https://img.freepik.com/free-photo/kid-playing-indoors_23-2148551586.jpg" alt="" />
            </Marquee>
        </div>
    );
};

export default ImageSec;