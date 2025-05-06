import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Recipe from "./components/Recipe"
import { recipesDB } from "./db/recipes"
import { useRecipes } from "./hooks/useRecipes"
import Panel from "./pages/Panel"
import { useEffect, useMemo } from "react"


function App() {
  
  const {recipeId, recipeWindow} = useRecipes()
  const dataFiltered = useMemo(() => recipesDB.filter(recipe => recipe.id === recipeId)[0], [recipeId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [recipeWindow])

  return (
    <>
      <Header/>
      {!recipeWindow ? (
       <AnimatePresence mode="wait">
         <Panel key={"recipes"}/>
       </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <Recipe key={"recipe"} dataFiltered={dataFiltered}/>
        </AnimatePresence>
      )}
    </>
  )
}

export default App
