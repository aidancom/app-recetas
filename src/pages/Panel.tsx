import Recipes from "../components/Recipes"
import SearchRecipe from "../components/SearchRecipe"
import Sidebar from "../components/Sidebar"
import {motion} from "framer-motion"

const Panel = () => {
  return (
    <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5}} className='lg:flex justify-between'>
      <div className='w-full lg:w-[20%]'>
        <Sidebar/>
      </div>
      <div className='w-full px-5 xl:px-0'>
        <SearchRecipe/>
        <Recipes/>
      </div>
    </motion.main>
  )
}

export default Panel
