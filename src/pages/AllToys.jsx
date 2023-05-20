import { useLoaderData } from "react-router-dom";
import ToyCard from "../components/ToyCard";

const AllToys = () => {

    const allToy = useLoaderData();
    console.log(allToy);

    return (
        <div className="my-10 shadow-lg">
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