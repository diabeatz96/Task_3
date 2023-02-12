import CalculateCosts from "./components/CalculateCosts"
import FilterProducts from "./components/FilterProducts"
import ListProducts from "./components/ListProducts"
import SortProducts from "./components/SortProducts"

function App() {

  return (
    <main>
      <div className= " grid md:grid-rows-2 md:grid-cols-2">
          <div>
              <CalculateCosts/>
          </div>
          <div>
              <FilterProducts/>
          </div>
          <div>
              <ListProducts/>
          </div>
          <div>
              <SortProducts/>
          </div>  
      </div>
    </main>
  )
}

export default App
