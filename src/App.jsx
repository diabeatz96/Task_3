import CalculateCosts from "./components/CalculateCosts"
import FilterProducts from "./components/FilterProducts"
import ListProducts from "./components/ListProducts"
import SortProducts from "./components/sortProducts"

function App() {

  return (
    <main className="w-screen max-h-screen flex flex-col">
      <h1 className="text-center font-bold text-2xl md:text-6xl py-10"> Welcome to the Super Tech Store📱 </h1>
      <div className= "grid md:grid-cols-2 py-10 space-y-6 place-items-center place-self-center w-1/2">
          <div >
            <FilterProducts/>
          </div>
          <div >
            <ListProducts/>
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
