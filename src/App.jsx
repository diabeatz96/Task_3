import CalculateCosts from "./components/CalculateCosts"
import FilterProducts from "./components/FilterProducts"
import ListProducts from "./components/ListProducts"
import SortProducts from "./components/sortProducts"

function App() {

  return (
    <main className=" flex flex-col bg-zinc-800 overflow-auto">
      <h1 className="text-center font-bold text-2xl md:text-5xl py-3"> Welcome to the Super Tech Store📱 </h1>
          <div className=" md:w-3/12 place-self-center overflow-x">
            <ListProducts/>
          </div>
      <div className= "grid md:grid-cols-3 space-y-6 place-items-center place-self-center bg-zinc-800 overflow-auto">
          <div >
            <FilterProducts/>
          </div>
          <div>
            <CalculateCosts/>
          </div>
          <div>
            <SortProducts/>
          </div>  
      </div>
    </main>
  )
}

export default App
