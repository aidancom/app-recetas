import { createContext, useState } from "react";
import { recipesDB } from "../db/recipes";
import { RecipesType } from "../types";
import React from "react";

type RecipeProviderProps = {
  children: React.ReactNode
}

type DataProps = {
  data: RecipesType[],
  recipeId: string,
  recipeWindow: boolean,
  loading: boolean,
  setData: React.Dispatch<React.SetStateAction<RecipesType[]>>,
  setRecipeWindow: React.Dispatch<React.SetStateAction<boolean>>,
  setRecipeId: React.Dispatch<React.SetStateAction<string>>,
  setLoading:  React.Dispatch<React.SetStateAction<boolean>>
}

export const RecipeContext = createContext<DataProps>(null!)

export const RecipeProvider = ({children}: RecipeProviderProps) => {

  const [data, setData] = useState<RecipesType[]>(recipesDB)
  const [recipeWindow, setRecipeWindow] = useState(false)
  const [recipeId, setRecipeId] = useState('')
  const [loading, setLoading] = useState(false)

  return (
      <RecipeContext.Provider value={{data, setData, setRecipeWindow, setRecipeId, setLoading, loading, recipeId, recipeWindow}}>
        {children}
      </RecipeContext.Provider>
  )
}