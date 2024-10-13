import React, { useEffect } from 'react'
import fetchItems from '../services/fetchItems'
import useItemsStore from '../stores/useItemStore'
import Hero from '../components/hero/Hero'
import CardsContainer from '../components/cards-list/CardsContainer'


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

  const heroHeight = 500;

  return (
    <div className='w-full h-full py-5 px-12 relative flex flex-col gap-10'>
      <div className={`h-[${heroHeight}px]`}>
        <Hero height={heroHeight}/>
      </div>
      <CardsContainer title='Featured Products' items={items} />
    </div>
  )
}

export default Home