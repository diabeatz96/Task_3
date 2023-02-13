import products from "../data/data";

const sortProducts = products.sort((a, b) => a.price - b.price);

console.log(sortProducts);

const SortProducts = () => {
    return (
        <div className= "card bg-gray-700 text-white">
            <div className="card-body items-center text-center">  
            <h2 className="card-title text-2xl font-bold underline">
                Sorted Product Cost
            </h2>
                <table className="table ">
                <thead>
                        <th> </th>
                        <th> ID </th>
                        <th> Device Name </th>
                        <th> Price </th>
                        <th> Sale? </th>
                    </thead>
                    <tbody>
                    {sortProducts.map((item) => {
                            return <tr>
                                <td> </td>
                                <th> {item.id} </th>
                                <td> {item.name} </td>
                                <td> ${item.price} </td>
                                <td> {item.onSale ? "Is On Sale!" : "No Sale Today"} </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        )   
}

export default SortProducts;