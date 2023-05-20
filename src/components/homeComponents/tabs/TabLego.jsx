
const TabLego = ({ lego }) => {

    const { name, photo, price, rating } = lego;

    return (
        <div className="border-2 border-sky-400 p-5 rounded-2xl flex flex-col justify-between">
            <img className="w-full" src={photo} alt="" />
            <div className="flex flex-col">
                <h1 className="font-n text-xl font-bold text-blue-600">Lego Name: {name}</h1>
                <h1 className="font-n text-xl font-bold text-yellow-600">Price: ${price}</h1>
                <h1 className="font-n text-xl font-bold text-orange-600">Ratings: {rating} Stars</h1>
                <hr className="border-2 my-4 border-sky-600" />
                <button className="btn-n">View Details</button>
            </div>
        </div>
    );
};

export default TabLego;