import { Item } from "../../interfaces/item"
import useItemsStore from "../../stores/useItemStore"

const FeaturedCard: React.FC = () => {
    const item = {
        name: 'name',
        image: 'image',
        description: 'description',
        price: 'price',
    }

    return (
        <div className='h-[400px] w-full bg-gray-100 rounded-xl border border-slate-400 overflow-hidden'>
            <div className="h-full w-full p-2 grid grid-cols-2 grid-rows-2 gap-3">
                <div className="w-full h-full bg-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={item.image} alt={item.name} className='h-full w-full object-cover mx-auto' />
                </div>
                <div className="w-full h-full bg-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={item.image} alt={item.name} className='h-full w-full object-cover mx-auto' />
                </div>
                <div className="w-full h-full bg-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={item.image} alt={item.name} className='h-full w-full object-cover mx-auto' />
                </div>
                <div className="w-full h-full bg-blue-200 rounded-lg overflow-hidden flex items-center justify-center">
                    <img src={item.image} alt={item.name} className='h-full w-full object-cover mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard