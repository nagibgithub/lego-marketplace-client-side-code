import { useLoaderData } from "react-router-dom";
import ToyCard from "../components/ToyCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AllToys = () => {

    const allToy = useLoaderData();
    // console.log(allToy);

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        console.log(search);
    };

    return (
        <div className="my-10 shadow-lg">
            <div>
                <h1 className="text-n text-3xl">All Legos</h1>
                <div className="w-full flex justify-center my-5 ">
                    <form onSubmit={handleSearch} className="search-n flex items-center">
                        <FontAwesomeIcon className="text-sky-600" icon={faSearch} />
                        <input className="focus:outline-none pl-5 mr-5 w-full" type="search" maxLength={30} placeholder="Search Your Lego by Name" name="search" id="search" />
                        <input className="mr-5 text-sky-600 cursor-pointer pr-1 rounded-full" type="submit" value="Search" />
                    </form>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="tr-th">
                            <th className="bg-red-300">Seller Name</th>
                            <th className="bg-sky-300">Lego Name</th>
                            <th className="bg-orange-300">Cartegory</th>
                            <th className="bg-yellow-300">Price</th>
                            <th className="bg-green-300">Available <br /> Quantity</th>
                            <th className="bg-purple-300">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToy.map(pd => <ToyCard key={pd._id} toy={pd}></ToyCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;