
const ToyCard = ({ toy }) => {

    console.log(toy);

    const {
        sellerName,
        name,
        category,
        subCategory,
        price,
        quantity,
        // photo,
        // rating,
        // _id
    } = toy


    return (
        <tr className="tr-td">
            <td className="bg-red-100">{sellerName}</td>
            <td className="bg-sky-100">{name}</td>
            <td className="bg-orange-100">{category}: {subCategory}</td>
            <td className="bg-yellow-100 text-center">${price}</td>
            <td className="bg-green-100 text-center">{quantity} pic</td>
            <td className="bg-purple-100 text-center"><button className="btn-n">View Details</button></td>
        </tr>
    );
};

export default ToyCard;