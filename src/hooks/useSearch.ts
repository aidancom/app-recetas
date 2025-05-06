import { useCallback, useEffect } from "react"
import { useRecipes } from "./useRecipes"
import { recipesDB } from "../db/recipes"

type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  search: string,
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,
  selectedCategory: string
}

export const useSearch = ({setSearch, search, selectedCategory}: SearchProps) => {

  const {setData, setLoading} = useRecipes()

  const searching = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => setSearch(e.target.value), [search])

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      if (!selectedCategory || selectedCategory === 'Todos') {
        setData(recipesDB);
      } else {
        const filtered = recipesDB.filter(recipe => recipe.category === selectedCategory)
        setData(filtered);
      }
      setLoading(false)
    }, 1000)

  }, [selectedCategory])

  useEffect(() => {
    if (!search) {
      setData(recipesDB);
    } else {
      const filtered = recipesDB.filter(recipe =>
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(search.toLowerCase())
        )
      );
      setData(filtered);
    }
  }, [search]);

  return {
    searching
  }
}