import Header from "./components/Header"
import Recipe from "./components/Recipe"
import { recipesDB } from "./db/recipes"
import { useRecipes } from "./hooks/useRecipes"
import Panel from "./pages/Panel"
import { useMemo } from "react"


function App() {
  const {recipeId, recipeWindow} = useRecipes()
  const dataFiltered = useMemo(() => recipesDB.filter(recipe => recipe.id === recipeId)[0], [recipeId])
  return (
    <>
      <Header/>
      {!recipeWindow ? (
        <Panel/>
      ) : (
        <Recipe dataFiltered={dataFiltered}/>
      )}
    </>
  )
}

export default App
