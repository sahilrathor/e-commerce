import React from 'react'

const OutlineBtn: React.FC<{name: string, onClick?: () => void}> = ({name, onClick}) => {
  return (
    <button className='px-2 py-1 rounded-md  text-white border border-white hover:bg-slate-600 transition-all duration-200 leading-none pb-2 ' onClick={onClick}>{name}</button>
  )
}

export default OutlineBtn