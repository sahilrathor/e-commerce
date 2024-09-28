import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import ItemCard from '../components/cards/ItemCard'
import { fetchItems } from '../services/fetchItems'
import { Item } from '../interfaces/item'
import useItemsStore from '../stores/items-store'

const Home: React.FC = () => {
  const { items, setItems } = useItemsStore()

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems()
      setItems(data)
    }
    fetchData()
  }, [])

  return (
    <div className='w-full h-full relative pt-20'>
        <div className='grid grid-cols-4 gap-4'>
        {/* {items.map((item: Item, index: number) => (
          <div className='w-1/4 border border-white/20 rounded-md p-2'>
            <ItemCard key={index} item={item} />
          </div>
        ))} */}
        </div>
    </div>
  )
}

export default Home