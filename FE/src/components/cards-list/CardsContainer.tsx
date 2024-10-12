import React from 'react'
import { Item } from '../../interfaces/item'
import Card from './Card'


const CardsContainer: React.FC<{ items: Item[], title: string }> = ({ items, title }) => {
    if (items.length === 0) {
        return (
            <div className='w-[90%] mt-10 mx-auto bg-white pt-5 pb-8 px-12 rounded-lg '>
                <h2 className='text-2xl font-semibold text-left mb-3'>
                {title}
                </h2>
                <p className='text-lg text-center'>No items found</p>
            </div>
        )
    }
    
    return (
        <div className='w-[90%] mt-10 mx-auto bg-white pt-5 pb-8 px-12 rounded-lg '>
            <h2 className='text-2xl font-semibold text-left mb-3'>
                {title}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                {items.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CardsContainer