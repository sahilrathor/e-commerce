import { useEffect, useState } from "react"
import { Item } from "../../interfaces/item"
import useItemsStore from "../../stores/useItemStore"

const FeaturedCard: React.FC = () => {
    const items = useItemsStore(state => state.items)
    const [featuredItems, setFeaturedItems] = useState<Item[]>([])

    useEffect(() => {
        const trending = items.filter((item: Item) => item.category.includes('trending'))
        const randomIndex = Math.floor(Math.random() * trending.length)
        if(randomIndex + 4 > trending.length){
            const set = trending.slice(randomIndex - 4, randomIndex)
            setFeaturedItems(set)
        }else{
            const set = trending.slice(randomIndex, randomIndex + 4)
            setFeaturedItems(set)
        }
    }, [items])

    return (
        <div className='max-h-full aspect-square m-auto rounded-2xl border border-gray-300 overflow-hidden'>
            <div className="h-full w-full p-3 grid grid-cols-2 grid-rows-2 gap-3">
                {featuredItems.map((item) => (
                    <div key={item._id} className="w-full h-full bg-blue-200/20 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src={item.image} alt={item.name} 

                        className='h-full w-full object-cover mx-auto' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedCard