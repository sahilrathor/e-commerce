import React from 'react'
import { Item } from '../../interfaces/item'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'
import useRecentViewedStore from '../../stores/useRecentViewedStore'

const Card: React.FC<{ item: Item }> = ({ item }) => {
  const recentlyViewedItems = useRecentViewedStore(state => state.recentlyViewedItems)
  const setRecentlyViewedItems = useRecentViewedStore(state => state.setRecentlyViewedItems)

  const handleClick = () => {
    if (recentlyViewedItems.find(data => data._id === item._id)) {
      return
    }

    if (recentlyViewedItems.length >= 5) {
      recentlyViewedItems.shift()
    }
    setRecentlyViewedItems([item, ...recentlyViewedItems])
  }

  return (
    <div className='w-full h-full p-2 rounded-md border border-slate-400 shadow-md overflow-hidden'
    >
      <div className='w-full h-40'>
        <img src={item.image} alt={item.name + 'image'} className='h-full object-cover mx-auto' />
      </div>

      <div
        className='p-2 flex flex-col gap-1 justify-center'
        >
        <Link
          to={`/product/${item._id}`}
          // target='_blank'
          onClick={handleClick}
          className='w-max text-md font-semibold'
        >
          {item.name}
        </Link>

        {item.description && (
          <Tooltip title={item.description}
            color='#00000077'
            placement='bottom'
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