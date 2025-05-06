import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error("El contexto debe ir en RecipeProvidder")
  }
  return context
}