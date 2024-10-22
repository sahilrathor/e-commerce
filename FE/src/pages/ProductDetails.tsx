import { useParams } from 'react-router-dom'
import { InputNumber } from 'antd'
import { useState, useEffect } from 'react'
import fetchItemInfo from '../services/fetchitemInfo'
import { ShareIconOutline, ShoppingCartIcon, WishlistIcon } from '../utils/icons'

const ProductDetails: React.FC = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState<number>(1)
    const maxQuantity = 25

    const [itemInfo, setItemInfo] = useState<any>(null)

    useEffect(() => {
        if (id) {
            fetchItemInfo(id).then((data) => {
                setItemInfo(data)
            })
        }
    }, [id])

    const rating = 4.5

    return (
        <div className="container py-8">
            <div className='w-full h-full bg-white p-8 flex gap-8 rounded-xl'>
                {/* PRODUCT IMAGE */}
                <div className="h-96 aspect-square rounded-lg border border-gray-200">
                    <img src={itemInfo?.image} alt={itemInfo?.name + ' image'} className='w-full h-full object-cover' />
                </div>

                <div className='h-full w-full flex flex-col gap-5 relative'>
                    {/* PRODUCT NAME AND BRAND */}
                    <div>
                        <p className='text-xl font-semibold'>{itemInfo?.name}</p>
                        {/* <p className='text-sm text-gray-500'>{itemInfo?.brand}</p> */}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div>
                        <p className='text-2xl font-semibold'>${itemInfo?.price}</p>
                    </div>

                    {/* PRODUCT DESCRIPTION */}
                    <div>
                        <p className='text-sm text-gray-500'>{itemInfo?.description}</p>
                    </div>

                    {/* PRODUCT RATING */}
                    <div className='w-fit bg-rose-500/10 border border-rose-500 flex items-center gap-2 py-0.5 px-1.5  rounded-lg'>
                        <p className='text-xs text-rose-500 font-bold'>
                            4.5
                        </p>
                    </div>

                    {/* PRODUCT OFFERS   */}
                    <div>
                        <p className='text-sm text-gray-600 font-semibold'>Offers :</p>
                        {itemInfo?.offers && itemInfo?.offers.length > 0 ? (
                            <p className='text-sm text-gray-500'>{itemInfo?.offers || 'No offers available'}</p>
                        ) : (
                            <p className='text-sm text-gray-500'>No offers available</p>
                        )}
                    </div>

                    {/* PRODUCT QUANTITY */}
                    <div className='justify-self-end flex items-center gap-2'>
                        <p className='text-sm text-gray-500'>Set Quantity :</p>
                        <InputNumber min={1} max={maxQuantity} value={quantity} onChange={(value) => setQuantity(value || 1)} />
                    </div>

                    <button className='bg-emerald-500 hover:bg-emerald-600 w-fit text-sm font-semibold justify-self-end text-white px-4 py-2 rounded-md'>Add to Cart</button>

                    <button className='bg-emerald-500 hover:bg-emerald-600 w-fit text-sm font-semibold justify-self-end text-white px-4 py-2 rounded-md'>Buy Now</button>

                    <div className='absolute top-5 right-5 flex  gap-2'>
                        <button className='w-8 h-8 border border-gray-200 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 hover:text-gray-600'>
                            <WishlistIcon size={24} />
                        </button>

                        <button className='w-8 h-8 border border-gray-200 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 hover:text-gray-600'>
                            <ShareIconOutline size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails