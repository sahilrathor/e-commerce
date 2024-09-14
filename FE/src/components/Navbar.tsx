import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className='w-full h-16 mt-1 bg-white/80 text-black px-2 flex justify-between items-center rounded-b-sm'>
        <h1>Navbar</h1>

        <div className='flex items-center gap-2'>
            <button className='bg-white/20 px-2 py-1 rounded-md  text-black border-2 border-indigo-700/80 hover:bg-indigo-700/80 hover:text-white transition-all duration-200 leading-none pb-2 '>Login</button>

            <button className='bg-white/20 px-2 py-1 rounded-md bg-indigo-700/80 text-white border-2 border-indigo-700/80 leading-none pb-2 hover:bg-indigo-800 transition-all duration-200'>Register</button>
        </div>
    </div>
  )
}

export default Navbar