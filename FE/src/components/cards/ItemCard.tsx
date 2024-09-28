import React from 'react'
import { Item } from '../../interfaces/item'

interface ItemCardProps {
    item: Item
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className='min-w-60 flex flex-col items-center justify-center border border-black rounded-md text-black'>
      <img src={item.image} alt={item.name} className='w-60 h-60 border border-black rounded-md object-cover' />
      <h3>{item.name}</h3>

      <p>{item.price}</p>
    </div>
  )
}

export default ItemCard