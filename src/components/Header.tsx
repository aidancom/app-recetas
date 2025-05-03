import React from 'react'

const Header = () => {
  return (
    <div className='w-full shadow'>
      <div className='p-5 flex justify-between items-center'>
        <img className='w-[5%] rounded-full' src='../src/assets/img/logo.png'/>
        <p className='font-bold uppercase text-2xl pr-5'>Las recetas de la <span className='text-[#A11F1F]'>Abuela</span></p>
      </div>
    </div>
  )
}

export default Header
