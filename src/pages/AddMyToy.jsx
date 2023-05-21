import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import pageTitle from "../hooks/pageTitle";

const AddMyToy = () => {

    pageTitle('Lego Store | Add Toy');

    const { user } = useContext(AuthContext);

    const [selecCategory, setCategory] = useState('');
    const [textLength, setTextLength] = useState(0);

    const handleCategory = event => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
    };

    const handleDescription = event => {
        const value = event.target.value;
        setTextLength(value.length);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const lego = { name, photo, sellerName, sellerEmail, category, subCategory, price, rating, quantity, description }

        fetch('https://b7a11-nagib-lego-server.vercel.app/legos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(lego)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('successfully added');
                    form.reset();
                    setTextLength(0);
                }
            })
    };

    return (
        <div className="h-full my-10">
            <form onSubmit={handleSubmit} className="bg-sky-400 py-5 h-full">
                <h1 className="text-n text-xl font-semibold px-5 pt-5">Lego Name and Photo</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                    <label className="input-group input-group-vertical">
                        <span className="input-label">1. Lego Photo URL</span>
                        <input name="photo" type="url" placeholder="https://example_photo.jpg" className="input input-bordered" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className="input-label">2. Lego Name</span>
                        <input name="name" type="text" placeholder="Give a Name of your Lego" className="input input-bordered" required />
                    </label>
                </div>
                <hr />
                <h1 className="text-n text-xl font-semibold px-5 pt-5">Seller Information (this section can not be changed)</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                    <label className="input-group input-group-vertical">
                        <span className="input-label">3. Seller Name</span>
                        <input name="sellerName" type="text" placeholder="Enter the Seller Name" defaultValue={user.displayName} className="input input-bordered" required />
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className="input-label">4. User Email</span>
                        <input name="sellerEmail" type="email" placeholder="example@example.com" value={user.email} className="input input-bordered" required />
                    </label>
                </div>
                <hr />
                <h1 className="text-n text-xl font-semibold px-5 pt-5">Lego Category</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                    <label className="input-group input-group-vertical">
                        <span className="input-label">5. Lego Category</span>
                        <select onClick={handleCategory} name="category" className="select w-full">
                            <option disabled selected>Select a Category</option>
                            <option>City</option>
                            <option>Classic</option>
                            <option>Movie</option>
                        </select>
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className="input-label">6. Lego Sub Category</span>
                        <select name="subCategory" className="select w-full">
                            {
                                selecCategory === "City" ?
                                    <>
                                        <option disabled selected>Select a Sub Category</option>
                                        <option>Train Setup</option>
                                        <option>Road Setup</option>
                                        <option>Constraction Setup</option>
                                    </>
                                    :
                                    selecCategory === "Classic" ?
                                        <>
                                            <option disabled selected>Select a Sub Category</option>
                                            <option>Bricks Box</option>
                                            <option>Build Together</option>
                                            <option>Fantasy Universe</option>
                                        </>
                                        :
                                        selecCategory === "Movie" ?
                                            <>
                                                <option disabled selected>Select a Sub Category</option>
                                                <option>Avatar</option>
                                                <option>Jurassic World</option>
                                                <option>Maevel</option>
                                            </>
                                            :
                                            <option disabled selected>Select a option 5. Lego Category first</option>
                            }
                        </select>
                    </label>
                </div>
                <hr />
                <h1 className="text-n text-xl font-semibold px-5 pt-5">Selling Information</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
                    <label className="input-group h-18">
                        <span className="input-label min-w-max">7. Price: $</span>
                        <input name="price" type="number" placeholder="10" min={10} max={100} step={1} className="input input-bordered h-full w-full text-center text-lg font-bold" required />
                        <span>USD</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <span className="input-label">8. Lego Ratings</span>
                        <div className="rating rating-lg border bg-white flex justify-center items-center">
                            <input type="radio" value={1} name="rating" className="mask mask-star-2 bg-sky-400" />
                            <input type="radio" value={2} name="rating" className="mask mask-star-2 bg-sky-400" />
                            <input type="radio" value={3} name="rating" className="mask mask-star-2 bg-sky-400" defaultChecked />
                            <input type="radio" value={4} name="rating" className="mask mask-star-2 bg-sky-400" />
                            <input type="radio" value={5} name="rating" className="mask mask-star-2 bg-sky-400" />
                        </div>
                    </label>
                    <label className="input-group h-18">
                        <span className="input-label min-w-max">9. Available Quantity</span>
                        <input name="quantity" type="number" placeholder="1" min={1} max={100} step={1} className="input input-bordered h-full w-full text-center text-lg font-bold" required />
                    </label>
                </div>
                <hr />
                <h1 className="text-n text-xl font-semibold px-5 pt-5">Lego Description</h1>
                <div className="grid grid-cols-1 gap-5 p-5">
                    <label className="input-group input-group-vertical">
                        <span className="input-label">10. Lego Description: <span className={`${textLength === 1000 ? "text-red-600" : "text-sky-700"}`}>{textLength}/1000</span></span>
                        <textarea onKeyUp={handleDescription} name="description" type="text" placeholder="Type a short description within 200 letters" maxLength={1000} className="input input-bordered h-24 whitespace-normal p-5" required />
                    </label>
                </div>
                <div className="w-full flex">
                    <input type="submit" value="Submit" className="btn-n w-2/3 text-center mx-auto cursor-pointer" />
                </div>
            </form>
        </div>
    );
};

export default AddMyToy;