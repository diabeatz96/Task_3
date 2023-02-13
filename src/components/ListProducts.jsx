import products from "../data/data";


const ListProducts = () => {
    return (
        <div className= "card text-white">
            <div className="card-body items-center text-center">  
            <h2 className="card-title text-2xl font-bold underline">
                List of Available Products
            </h2>

            <div className="carousel">
            {products.map((item) =>  {
                return <div id = {item.id} className="carousel-item w-full place-content-center">
                <img height="30%" width = "30%" src= {item.img} className="" />
                       </div> 
            
            })}
        </div> 
            <div className="flex justify-center gap-1">
                {products.map((item) => {
                   return <a href= {`#${item.id}`} className="btn btn-xs"> {item.name}</a>
                })}
            </div>
            </div>
        </div>
        )   
}

export default ListProducts;
