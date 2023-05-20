import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const lego = useLoaderData();
    console.log(lego);

    const {
        sellerName,
        name,
        category,
        subCategory,
        price,
        quantity,
        photo,
        rating,
        description,
        sellerEmail,
        // _id
    } = lego;


    return (
        <div className="my-10">
            <h1 className="text-n text-5xl">{name}</h1>
            <hr className="border-2 border-sky-700" />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <img className="w-full" src={photo} alt="" />
                <div className="mx-5 lego-details">
                    <h1 className="text-blue-500 font-bold">Seller Name: {sellerName}</h1>
                    <h1 className="text-yellow-500 font-bold">Seller Email: {sellerEmail}</h1>
                    <h1 className="text-green-500 font-bold">Available Quantity: {quantity}</h1>
                    <h1 className="text-sky-500 font-bold">Product Price: ${price}</h1>
                    <h1 className="text-purple-500 font-bold">Product Category: {category}</h1>
                    <h1 className="text-red-500 font-bold">Product Sub Category: {subCategory}</h1>
                    <h1 className="text-orange-500 font-bold">Product Rationgs: {rating} Stars</h1>
 
                    <div className="my-5">
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-3" className="btn-n cursor-pointer">Product Description</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">{name}</h3>
                                <p className="py-4">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ToyDetails;