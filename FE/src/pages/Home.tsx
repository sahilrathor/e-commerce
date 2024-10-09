import React, { useEffect, useState } from 'react'
import { fetchItems } from '../services/fetchItems'
import useItemsStore from '../stores/items-store'
import Hero from '../components/hero/Hero'
import CardsContainer from '../components/cards-list/CardsContainer'
import { Item } from '../interfaces/item';
import { useSearchParams } from 'react-router-dom'


const Home: React.FC = () => {

  const items = useItemsStore(state => state.items)
  const setItems = useItemsStore(state => state.setItems)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems()
      setItems(data)
    }
    fetchData()
  }, [])

  console.log(items)


  return (
    <div className='w-full h-full relative pt-20 '>
      <Hero />
      {/* <CardsContainer title='Featured Products' items={items} /> */}
    </div>
  )
}

export default Home