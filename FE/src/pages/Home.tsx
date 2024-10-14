import React, { useEffect } from 'react'
import fetchItems from '../services/fetchItems'
import useItemsStore from '../stores/useItemStore'
import Hero from '../components/hero/Hero'
import CardsContainer from '../components/cards-list/CardsContainer'
import Partners from '../components/partners/Partners'


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
    <div id='home' className='w-full h-full py-5 relative flex flex-col gap-10'>
      <div className={`h-[${heroHeight}px] px-12`}>
        <Hero height={heroHeight} />
      </div>
      <div className='px-12'>
        <CardsContainer title='Featured Products' items={items} showFilter={false} />
        {/* <CardsContainer title='Best Sellers' items={items} showFilter={false} /> */}
      </div>
      <Partners />
    </div>
  )
}

export default Home