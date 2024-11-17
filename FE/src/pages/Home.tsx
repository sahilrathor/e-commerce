import React, { useEffect, useState } from 'react'
import fetchItems from '../services/fetchItems'
import useItemsStore from '../stores/useItemStore'
import Hero from '../components/hero/Hero'
import CardsContainer from '../components/cards-list/CardsContainer'
import Partners from '../components/partners/Partners'
import FeaturedCard from '../components/featured/FeaturedCard'
import useRecentViewedStore from '../stores/useRecentViewedStore'
import { Item } from '../interfaces/item'


const Home: React.FC = () => {

  const setItems = useItemsStore(state => state.setItems)

  const recentlyViewedItems = useRecentViewedStore(state => state.recentlyViewedItems)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems()
      setItems(data)
    }
    fetchData()
  }, [])

  const [trendingItems, setTrendingItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems(['trending'])
      setTrendingItems(data)
    }
    fetchData()
  }, [])



  return (
    <div id='home' className='w-full h-full py-5 relative flex flex-col gap-10'>

      <div className={`md:h-[400px] sm:px-12 px-5 flex gap-5 items-center justify-center flex-wrap-reverse md:flex-nowrap`}>
        <div className="md:w-1/3 w-full h-full flex justify-center items-center">
          <FeaturedCard />
        </div>
        <div className="md:w-2/3 w-full h-full">
          <Hero />
        </div>
      </div>




      <div className='sm:px-12 px-0'>
        <CardsContainer title='Trending Products' items={trendingItems} showFilter={false} />
      </div>
      {/* <div className='px-12'>
        <CardsContainer title='Best Sellers' items={items} showFilter={false} />
      </div> */}

      <Partners />

      {/* Recently Viewed */}
      {recentlyViewedItems.length > 0 && (
        <div className='sm:px-12 px-0'>
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