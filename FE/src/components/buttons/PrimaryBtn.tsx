import React from 'react'

const PrimaryBtn: React.FC<{name: string, onClick?: () => void}> = ({name, onClick}) => {
  return (
    <button 
    className='px-2 py-1 rounded-md bg-white/80 text-black font-semibold border border-white leading-none pb-2 hover:bg-white transition-all duration-200'
    onClick={onClick}>{name}</button>
  )
}

export default PrimaryBtn