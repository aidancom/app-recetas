import { useRecipes } from '../hooks/useRecipes'
import { RecipesType } from '../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Recipes = () => {
  const {data, setRecipeId, setRecipeWindow} = useRecipes()

  const handleClick = (recipe: RecipesType) => {
    setRecipeId(recipe.id)
    setRecipeWindow(true)
  }

  return (
    <div className='flex flex-wrap space-x-6'>
      {data.length === 0 ? (
        <div className='text-center w-full pt-20'><p>Sin resultados</p></div>
      ) : (
        data.map(recipe => (
        <div key={recipe.id} className='shadow my-5 h-full md:w-[23%]'>
          <img src={`../src/assets/img/${recipe.image}.jpg`} alt="" className='h-[350px] w-[400px] object-cover' />
          <p className='p-3 font-bold text-[22px]'>{recipe.name}</p>
          <div className='pl-3'>
            {Array.from({length: recipe.difficult}).map(() => (
              <FontAwesomeIcon className='text-[#A11F1F]' icon={faStar}/>
            ))}
          </div>
          <p className='p-3 overflow-hidden text-ellipsis'>{recipe.desc.length > 20 && recipe.desc.slice(0, 120) + '...'}</p>
          <div className='flex justify-end'>
            <button onClick={() => handleClick(recipe)} className='bg-[#A11F1F] uppercase text-white font-medium px-5 py-2 rounded m-3 cursor-pointer'>Ver Receta</button>
          </div>
        </div>
      )))}
    </div>
  )
}

export default Recipes
