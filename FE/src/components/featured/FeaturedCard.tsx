import useItemsStore from "../../stores/useItemStore"

const FeaturedCard: React.FC = () => {
    const items = useItemsStore(state => state.items)
    const featuredItems = items.filter(item => item._id === '670c1da558985f7c9ab0fe1e' || item._id === '670c1f3f58985f7c9ab0fe89' || item._id === '670c20a258985f7c9ab0febf' || item._id === '670c1dca58985f7c9ab0fe34') 


    return (
        <div className='h-full aspect-square m-auto rounded-2xl border border-gray-300 overflow-hidden'>
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