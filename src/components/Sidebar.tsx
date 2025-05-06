import { useFilter } from "../hooks/useFilter"

const Sidebar = () => { 
  const { handleFilterChange, handleClearFilter, selected } = useFilter()
  
  return (
    <div className='bg-slate-300 m-3 p-3 h-full xl:h-300 relative z-[99999]'>
      <p className='font-bold underline'>Filtros</p>
      <form className="flex flex-col space-y-2 pt-5">
        <div className="gap-1 flex items-center"><input value="ASC" type="radio" name="filter" id="filterASC" onChange={handleFilterChange} checked={selected === 'ASC' } /><label htmlFor="filterASC">Ascendente</label></div>
        <div className="gap-1 flex items-center"><input value="DESC" type="radio" name="filter" id="filterDESC" onChange={handleFilterChange} checked={selected === 'DESC' } /><label htmlFor="filterDESC">Descendente</label></div>
        <div className="gap-1 flex items-center"><input value="DIFF" type="radio" name="filter" id="filterDifficult" onChange={handleFilterChange} checked={selected === 'DIFF' } /><label htmlFor="filterDifficult">Dificultad</label></div>
        <input type="button" value="Eliminar filtro" className="bg-[#A11F1F] hover:bg-[#5f1515] transition cursor-pointer uppercase font-medium text-[13px] py-1 text-white rounded-sm" onClick={handleClearFilter}/>
      </form>
    </div>
  )
}

export default Sidebar
