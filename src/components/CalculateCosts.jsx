import products from "../data/data";

const reduceProduct = products.reduce((accumulator, cost) => {
        return cost.price + accumulator;
}, 0)

console.log(reduceProduct);

const CalculateCosts = () => {
    return (
    <div className= "card w-1/2 bg-gray-700 text-white">
        <div className="card-body items-center text-center">  
            <h2 className="card-title">
                Total cost of every product:
            </h2>
                
                <ul>
                 {products.map((item) => {
                    return <li className=" list-item list-inside " key={item.id}> {item.name} ${item.price}</li>
                  })}
                           <li> -------- </li>
                </ul>

                <h2 className=" font-semibold text-lg">  $ {reduceProduct} </h2>
        </div>
    </div>
    )
}   

export default CalculateCosts;