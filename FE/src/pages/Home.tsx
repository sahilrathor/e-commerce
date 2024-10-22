import React, { useEffect } from 'react'
import fetchItems from '../services/fetchItems'
import useItemsStore from '../stores/useItemStore'
import Hero from '../components/hero/Hero'
import CardsContainer from '../components/cards-list/CardsContainer'
import Partners from '../components/partners/Partners'
import FeaturedCard from '../components/featured/FeaturedCard'
import useRecentViewedStore from '../stores/useRecentViewedStore'


const Home: React.FC = () => {

  const items = useItemsStore(state => state.items)
  const setItems = useItemsStore(state => state.setItems)

  const recentlyViewedItems = useRecentViewedStore(state => state.recentlyViewedItems)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems()
      setItems(data)
    }
    fetchData()
  }, [])


  const heroHeight = 400;

  return (
    <div id='home' className='w-full h-full py-5 relative flex flex-col gap-10'>
      <div className={`h-[${heroHeight}px] px-12 flex gap-5 items-center justify-center`}>
        <div className="w-1/3">
          <FeaturedCard />
        </div>
        <div className="w-2/3">
          <Hero height={heroHeight} />
        </div>
      </div>
      <div className='px-12'>
        <CardsContainer title='Featured Products' items={items} showFilter={false} />
        {/* <CardsContainer title='Best Sellers' items={items} showFilter={false} /> */}
      </div>
      
      <Partners />

      {/* Recently Viewed */}
      {recentlyViewedItems.length > 0 && (
      <div className='px-12'>
          <CardsContainer 
            title='Recently Viewed' 
            items={recentlyViewedItems} 
            showFilter={false} 
            showPagination={false}
            style='bg-transparent border border-gray-100'
          />
        </div>
      )}
    </div>
  )
}

export default Home