import products from "../data/data";

const reduceProduct = products.reduce((accumulator, cost) => {
        return cost.price + accumulator;
}, 0)

console.log(reduceProduct);

const CalculateCosts = () => {
    return (
    <div className= "card max-w-lg bg-gray-700 text-white">
        <div className="card-body items-center">  
            <h2 className="card-title text-2xl font-bold underline">
                Cost of All Products
            </h2>
                
                <ul>
                 {products.map((item) => {
                    return <li className=" list-item list-inside " key={item.id}> {item.name} ${item.price}</li>
                  })}
                           <li> ------------------------------- </li>
                </ul>

                <h2 className="alert font-black text-3xl"> TOTAL:  ${reduceProduct} </h2>
        </div>
    </div>
    )
}   

export default CalculateCosts;