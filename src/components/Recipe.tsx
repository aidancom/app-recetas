import { RecipesType } from '../types'
import { useRecipes } from '../hooks/useRecipes'

type RecipeProps = {
  dataFiltered: RecipesType
}

const Recipe = ({dataFiltered}: RecipeProps) => {
  const {setRecipeWindow} = useRecipes()
  return (
    <div className='max-w-[1800px] mx-auto py-5 space-y-5 px-7'>
      <button onClick={() => setRecipeWindow(false)} className='bg-[#A11F1F] uppercase text-white font-medium px-5 py-2 rounded m-3 cursor-pointer'>Volver</button>
      <div className='pt-10 grid w-full xl:grid-cols-2 gap-20'>
        <div>
          <img className='w-full h-[450px] object-cover' src={`../src/assets/img/${dataFiltered.image}.jpg`} alt="" />
        </div>
        <div className='space-y-5'>
          <p className='font-bold text-4xl'>{dataFiltered.name}</p>
          <p>{dataFiltered.desc}</p>
          <div>
            <p><span className='font-bold'>Categoría:</span> {dataFiltered.category}</p>
            <p><span className='font-bold'>Tiempo de preparacion:</span> {dataFiltered['preparation-time']} min.</p>
            <p><span className='font-bold'>Tiempo de cocinado:</span> {dataFiltered['cooking-time']} min.</p>
            <p><span className='font-bold'>Total:</span> {dataFiltered['cooking-time'] + dataFiltered['preparation-time']} min.</p>
          </div>
        </div>
      </div>
      <div className='space-y-5'>
        <p className='text-2xl font-bold'>Ingredientes</p>
        <ul className='list-disc pl-10'>
        {dataFiltered.ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
        </ul>
        <p className='text-2xl font-bold'>Instrucciones</p>
        <p>{dataFiltered.preparation}</p>
      </div>
    </div>
  )
}

export default Recipe
