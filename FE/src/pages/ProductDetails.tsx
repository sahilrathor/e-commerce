import { useParams } from 'react-router-dom'
import { InputNumber } from 'antd'
import { useState, useEffect } from 'react'
import fetchItemInfo from '../services/fetchitemInfo'

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
    
    
    return (
        <div className="container py-8">
            <div className='w-full h-full bg-white p-8 flex gap-8 rounded-xl'>
                {/* PRODUCT IMAGE */}
                <div className="w-96 h-96 bg-indigo-500 rounded-lg">
                    <img src={itemInfo?.image} alt={itemInfo?.name + ' image'} className='w-full h-full object-cover' />
                </div>

                <div className='h-96 flex flex-col gap-5'>
                    {/* PRODUCT NAME AND BRAND */}
                    <div>
                        <p className='text-2xl font-semibold'>{itemInfo?.name}</p>  
                        <p className='text-sm text-gray-500'>{itemInfo?.brand}</p>
                    </div>

                    {/* PRODUCT PRICE */}
                    <div>
                        <p className='text-xl font-semibold'>${itemInfo?.price}</p>
                    </div>

                    {/* PRODUCT QUANTITY */}
                    <div className='justify-self-end flex items-center gap-2'>
                        <p className='text-sm text-gray-500'>Set Quantity :</p>
                        <InputNumber min={1} max={maxQuantity} value={quantity} onChange={(value) => setQuantity(value || 1)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails