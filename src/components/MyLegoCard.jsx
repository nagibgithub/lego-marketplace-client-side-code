import { Link } from "react-router-dom";
import swal from 'sweetalert';


const MyLegoCard = ({ lego, allLego, setLego }) => {

    const {
        // sellerName, //**
        name,
        category,
        subCategory,
        price,
        quantity,
        photo,
        rating,
        description,
        // sellerEmail, // **
        _id
    } = lego;

    // console.log(_id, name);
    const handleDelete = id => {
        swal({
            title: `"${name}" will be deleted?`,
            text: `Are you ure, it will be deleted if you press Ok`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://b7a11-nagib-lego-server.vercel.app/legos/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                swal("Your Lego product is deleted successfully", {
                                    icon: "success",
                                });
                                const remainingLego = allLego.filter(pd => pd._id !== id);
                                setLego(remainingLego);
                            }
                        })
                } else {
                    swal("Ok You are safe Lego file is not deleted");
                }
            });
    };

    return (
        <div className="grid grid-cols-5 items-center border-2 border-sky-600 rounded-3xl my-5 p-5 gap-3 justify-between">
            <img className="w-52" src={photo} alt="Lego" />
            <div>
                <h1 className="text-n text-2xl">{name}</h1>
                <h1>Category: {category}</h1>
                <h1>Sub Category: {subCategory}</h1>
            </div>
            <div>
                <h1>Price: ${price}</h1>
                <h1>Available Products: {quantity}</h1>
                <h1>Product Rationg: {rating} Stars</h1>
            </div>
            <div>
                <div className="my-5">
                    {/* The button to open modal */}
                    <label htmlFor={_id} className="btn-n cursor-pointer">Product Description</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={_id} className="modal-toggle" />
                    <label htmlFor={_id} className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <h3 className="text-lg font-bold">{name}</h3>
                            <p className="py-4">{description}</p>
                        </label>
                    </label>
                </div>
                <Link to={`/legos/${_id}`}><button className="btn-n">View Lego Details</button></Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link className="btn-update flex justify-center" to={`/update/${_id}`}><button>Update Lego</button></Link>
                <button onClick={() => handleDelete(_id)} className="btn-delete">Delete Lego</button>
            </div>
        </div>
    );
};

export default MyLegoCard;