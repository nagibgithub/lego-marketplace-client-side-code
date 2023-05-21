import { Link, useParams } from "react-router-dom";
import MyLegoCard from "../components/MyLegoCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import pageTitle from "../hooks/pageTitle";

const MyToys = () => {

    pageTitle('Lego Store | My Toys');

    const emailId = useParams();
    const [legoData, setLegoData] = useState([]);
    const url = `https://b7a11-nagib-lego-server.vercel.app/all_legos/${emailId.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLegoData(data));
    }, [url]);

    const { user } = useContext(AuthContext);

    return (
        <div>
            {
                user.email != emailId.email ?
                    <>
                        <h1>Your User Id is not permited to go this route please Login with valid user.</h1>
                    </>
                    :
                    legoData.length !== 0 ?
                        <>
                            <h1 className="text-n text-3xl">Seller: {legoData[0].sellerName}</h1>
                            <h1 className="text-n text-xl">Seller Email: {legoData[0].sellerEmail}</h1>
                            <hr className="border-2 border-sky-500" />
                            <h1 className="text-n text-2xl">Total Lego You Added: {legoData.length}</h1>
                            <div>
                                {
                                    legoData.map(pd => <MyLegoCard 
                                        key={pd._id} 
                                        lego={pd} 
                                        allLego={legoData} 
                                        setLego={setLegoData}></MyLegoCard>)
                                }
                            </div>
                        </>
                        :
                        <h1 className="text-n text-3xl">Sorry..! <br />
                            Mr. <span>{user.displayName}</span>
                            <br />
                            You do not add any lego yet. to see your lego <Link to={'/add_toy'}><span className="text-green-700 hover:underline">Add a Lego</span></Link> first</h1>
            }
        </div>
    );
};

export default MyToys;