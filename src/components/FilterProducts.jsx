import products from "../data/data";

const onSaleProducts = products.filter(item => item.onSale)

console.log(onSaleProducts);

const FilterProducts = () => {
    return (
        <div className= "card max-w-lg bg-gray-700 text-white">
            <div className="card-body items-center text-center">  
            <h2 className="card-title text-2xl font-bold underline">
                Current Products on Sale.
            </h2>
                    
                    
                     {onSaleProducts.map((item) => {
                        return <p className="alert alert-info text-white" key={item.id}> <span className=" text-2xl font-black"> {item.name}</span>  <span className="italic badge badge-accent"> ${item.price} </span></p>
                      })}
                    
            </div>
        </div>
        )
}

export default FilterProducts;
