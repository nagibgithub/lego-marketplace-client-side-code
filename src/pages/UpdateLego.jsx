import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import toast from 'react-hot-toast';
import pageTitle from "../hooks/pageTitle";

const UpdateLego = () => {

    pageTitle('Lego Store | Update Lego');

    const [textLength, setTextLength] = useState(0);
    const lego = useLoaderData();
    const handleDescription = event => {
        const value = event.target.value;
        setTextLength(value.length);
    };



    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateLego = { price, quantity, description };
        // console.log(updateLego);

        fetch(`https://b7a11-nagib-lego-server.vercel.app/legos/${lego._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateLego)
        })
            .then(res => res.json())
            .then(data => {
                data.modifiedCount > 0 ?
                    toast.success('Your Lego is updated...!')
                    :
                    toast.error('Something is going wrong...')
            })
        form.reset()


    };



    return (
        <div className="my-5">
            <h1 className="text-n text-3xl">Update the lego: {lego.name}</h1>
            <hr className="border-2 border-sky-700 my-5" />
            <form onSubmit={handleUpdate} className="w-2/3 mx-auto grid gap-4 border-2 border-sky-500 p-5 rounded-3xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                    <label className="input-group h-20">
                        <span className="input-label min-w-max">7. Price: $</span>
                        <input name="price" type="number" defaultValue={lego.price} placeholder="10" min={10} max={100} step={1} className="input input-bordered h-full w-full text-center text-lg font-bold" required />
                        <span>USD</span>
                    </label>

                    <label className="input-group h-20">
                        <span className="input-label min-w-max">9. Available Quantity</span>
                        <input name="quantity" type="number" defaultValue={lego.quantity} placeholder="1" min={1} max={100} step={1} className="input input-bordered h-full w-full text-center text-lg font-bold" required />
                    </label>
                </div>

                <label className="input-group input-group-vertical">
                    <span className="input-label">10. Lego Description: <span className={`${textLength === 1000 ? "text-red-600" : "text-sky-700"}`}>{textLength}/1000</span></span>
                    <textarea onKeyUp={handleDescription} defaultValue={lego.description} name="description" type="text" placeholder="Type a short description within 200 letters" maxLength={1000} className="input input-bordered h-24 whitespace-normal p-5" required />
                </label>
                <input type="submit" className="btn-n cursor-pointer" value="Update Data" />
            </form>
        </div>
    );
};

export default UpdateLego;