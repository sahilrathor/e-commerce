import React from 'react'
import { Item } from '../../interfaces/item'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'

const Card: React.FC<{ item: Item }> = ({ item }) => {


  return (
    <div className='w-full h-fit p-2 rounded-md border border-slate-400 overflow-hidden'
    >
      <div className='w-full h-40'>
        <img src={item.image} alt={item.name + 'image'} className='h-full object-cover mx-auto' />
      </div>
      <div className='p-2 flex flex-col gap-1 justify-center'>
        <Link to={`/product/${item._id}`}
          className='w-max text-md font-semibold'
        >
          {item.name}
        </Link>
        {item.description && (
          <Tooltip title={item.description}
            color='#00000077'
          >
            <p className='text-sm text-gray-500'>
              {item.description.length > 50 ? item.description.substring(0, 50) + '...' : item.description}
            </p>
          </Tooltip>
        )}
        <p className='text-md font-semibold text-slate-500'>${item.price}</p>
      </div>
    </div>
  )
}

export default Card