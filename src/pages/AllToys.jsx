// import { useLoaderData } from "react-router-dom";
import ToyCard from "../components/ToyCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const AllToys = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    // const allToy = useLoaderData();
    const searchRef = useRef(null);

    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://nagib-toy.web.app/serarch_legos?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [asc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    };

    return (
        <div className="my-10 shadow-lg">
            <div>
                <h1 className="text-n text-3xl">All Legos</h1>
                <div className="w-full flex justify-center my-5 ">
                    <form onSubmit={handleSearch} className="search-n flex items-center">
                        <FontAwesomeIcon className="text-sky-600" icon={faSearch} />
                        <input className="focus:outline-none pl-5 mr-5 w-full" ref={searchRef} type="search" maxLength={30} placeholder="Search Your Lego by Name" name="search" id="search" required/>
                        <input className="mr-5 text-sky-600 cursor-pointer pr-1 rounded-full" type="submit" value="Search" />
                    </form>
                    <button
                        className="btn-n"
                        onClick={() => setAsc(!asc)}
                    >{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>
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
                            services.map(pd => <ToyCard key={pd._id} toy={pd}></ToyCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;