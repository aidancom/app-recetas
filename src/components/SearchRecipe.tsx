import React, { useState } from 'react'
import { useSearch } from '../hooks/useSearch'
import { categories } from '../db/categories'

const SearchRecipe = () => {

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const {searching} = useSearch({search, setSearch, selectedCategory, setSelectedCategory})
  return (
    <div className='max-w-4xl mx-auto mt-10 pb-5 flex gap-5'>
      <input type='text' placeholder='Buscar por ingrediente' value={search} onChange={searching} className='w-full border border-solid p-1 rounded'/>
      <select defaultValue='' value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className='w-[35%] border border-solid p-1 rounded'>
        <option value='' disabled={true}>Seleccionar Categoria</option>
        <option value='Todos'>Todos</option>
        {categories.map(category => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </div>
  )
}

export default SearchRecipe
