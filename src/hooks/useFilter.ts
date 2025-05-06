import React, { useState } from "react"
import { useRecipes } from "./useRecipes";
import { recipesDB } from "../db/recipes";
 
export const useFilter = () => {
  
  const {data, setData, setLoading} = useRecipes()
  const [selected, setSelected] = useState('')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
    setLoading(true)
    setTimeout(() => {
      switch(e.target.value) {
        case 'ASC': {
          const filter = [...data].sort((a, b) => a.name.localeCompare(b.name))
          setData(filter)
          break
        }
        case 'DESC': {
          const filter = [...data].sort((a, b) => b.name.localeCompare(a.name))
          setData(filter)
          break
        }
        case 'DIFF': {
          const filter = [...data].sort((a, b) => b.difficult - a.difficult)
          setData(filter)
          break
        }
        default:
          break
      }
    setLoading(false)
    }, 1000)

  };

  const handleClearFilter = () => {
    setData(recipesDB)
    setSelected('')
  }

  return {
    handleFilterChange,
    handleClearFilter,
    selected
  }
}