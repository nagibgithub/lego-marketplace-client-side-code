
const WeekPics = () => {
    return (
        <div className="my-10">
            <h1 className="text-n text-2xl">This Weeks top picks</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div data-aos="fade-up" className="flex flex-col justify-center">
                    <img src="https://www.lego.com/cdn/cs/set/assets/blte947d7a44bd7c960/21338-Apex-Page-202302-Block-Standard-1.jpg" alt="" />
                    <h1 className="text-lg text-center font-bold my-2">New LEGO® Ideas A-Frame Cabin</h1>
                    <p className="mb-2">Build the perfect getaway with this cozy, fan-inspired set.</p>
                    <button className="btn-n">Shop now</button>
                </div>
                <div data-aos="fade-up-right" className="flex flex-col justify-center">
                    <img src="https://www.lego.com/cdn/cs/set/assets/bltd4c5334ab6e3bf97/Key-Art_780x540_Card_Content.jpg" alt="" />
                    <h1 className="text-lg text-center font-bold my-2">LEGO® 2K Drive</h1>
                    <p className="mb-2">Explore, build, and race together</p>
                    <button className="btn-n">Shop now</button>
                </div>
                <div data-aos="fade-up-left" className="flex flex-col justify-center">
                    <img src="https://www.lego.com/cdn/cs/set/assets/blt69acc6d58da3068c/76917-T2-202301-PS-Block-Standard.jpg" alt="" />
                    <h1 className="text-lg text-center font-bold my-2">Recreate a turbo-charged car</h1>
                    <p className="mb-2">Rev up with the LEGO® Speed Champions 2 Fast 2 Furious</p>
                    <button className="btn-n">Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default WeekPics;