import ToyCard from "../components/ToyCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import pageTitle from "../hooks/pageTitle";

const AllToys = () => {
    pageTitle('Lego Store | All Legos');
    const allToy = useLoaderData();
    const [legosData, setLegoData] = useState(allToy);
    const [asc, setAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const totalProducts = allToy.length;
    const totalPages = Math.ceil(totalProducts / 20);
    const pageNumbers = [...Array(totalPages).keys()];
    useEffect(() => {
        fetch(`https://b7a11-nagib-lego-server.vercel.app/searchLego?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setLegoData(data));
    }, [asc, search]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://b7a11-nagib-lego-server.vercel.app/products?page=${currentPage}&limit=${20}`);
            const data = await response.json();
            setLegoData(data);
        }
        fetchData();
    }, [currentPage]);

    const handleSearch = event => {
        event.preventDefault();
        // console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    };

    return (
        <div className="my-10 shadow-lg">
            <div>
                <h1 className="text-n text-3xl">All Legos</h1>
                <div className="w-full flex justify-center my-5 ">
                    <form onSubmit={handleSearch} className="search-n flex items-center">
                        <FontAwesomeIcon className="text-sky-600" icon={faSearch} />
                        <input className="focus:outline-none pl-5 mr-5 w-full" ref={searchRef} type="search" maxLength={30} placeholder="Search Your Lego by Name" name="search" id="search" />
                        <input className="mr-5 text-sky-600 cursor-pointer pr-1 rounded-full" type="submit" value="Search" />
                    </form>
                </div>
                <button className="btn-n w-full" onClick={() => setAsc(!asc)} >{asc ? 'Short by Price: High to Low' : 'Short by Price: Low to High'}</button>
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
                            legosData.map(pd => <ToyCard key={pd._id} toy={pd}></ToyCard>)
                        }
                    </tbody>
                </table>
            </div>
            <div className="border text-center py-5">
                <p className="text-lg font-bold">Page No: {currentPage + 1} / Items per page: 20</p>
                {
                    pageNumbers.map(number => <button key={number} className={currentPage === number ? 'selected' : 'unSelected'} onClick={() => setCurrentPage(number)} >{number + 1}</button>)
                }

            </div>
        </div>
    );
};

export default AllToys;