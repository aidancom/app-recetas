import Recipes from "../components/Recipes"
import SearchRecipe from "../components/SearchRecipe"
import Sidebar from "../components/Sidebar"

const Panel = () => {
  return (
    <main className='flex justify-between'>
      <div className='w-[10%]'>
        <Sidebar/>
      </div>
      <div className='w-full'>
        <SearchRecipe/>
        <Recipes/>
      </div>
    </main>
  )
}

export default Panel
