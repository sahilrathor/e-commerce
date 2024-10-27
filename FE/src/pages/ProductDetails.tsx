import { Link, useParams } from 'react-router-dom'
import { InputNumber, message, Modal } from 'antd'
import { useState, useEffect } from 'react'
import fetchItemInfo from '../services/fetchitemInfo'
import { HeartIconFill, HeartIconOutline, ShareIconFill, ShareIconOutline, StarIconFill, StarIconHalf, StarIconOutline } from '../utils/icons'
import CardsContainer from '../components/cards-list/CardsContainer'
import { CartItem, Item } from '../interfaces/item'

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import useCartStore from '../stores/useCartStore'
import useCartDrawerStore from '../stores/UseCartDrawerStore'

const ProductDetails: React.FC = () => {

    const { id } = useParams()
    const [quantity, setQuantity] = useState<number>(1)
    const maxQuantity = 25

    const [itemInfo, setItemInfo] = useState<Item | null>(null)

    const [similarItems, setSimilarItems] = useState<Item[]>([])

    const [openShareModal, setOpenShareModal] = useState<boolean>(false)
    const { cartItems, addItemToCart } = useCartStore()
    const [inCart, setInCart] = useState<boolean>(false)
    const setOpenCartDrawer = useCartDrawerStore(state => state.setOpen)

    useEffect(() => {
        if (id) {
            try {
                fetchItemInfo(id).then((data) => {
                    setItemInfo(data.item)
                    setSimilarItems(data.similarItems)
                })
            } catch (error) {
                console.error("Error fetching item info:", error);
            }
        }
    }, [id])

    useEffect(() => {
        if (cartItems.find((item: CartItem) => item._id === itemInfo?._id)) {
            setInCart(true)
        }
    }, [cartItems, itemInfo])
    // useEffect(() => {
    //     const data = items.filter((item: Item) => item.category.includes(itemInfo?.category[0] || ''))
    //     setSimilarItems(data)
    // }, [items, itemInfo
    // ])



    const rating = 1.5

    const getRatingIcon = (rating: number) => {
        const fullStars = Math.floor(rating)
        const halfStars = rating % 1
        const emptyStars = 5 - fullStars - (halfStars > 0 ? 1 : 0)

        return (
            <>
                {Array.from({ length: fullStars }, (_, index) => (
                    <StarIconFill key={index} size={12} />
                ))}
                {halfStars > 0 && <StarIconHalf size={12} />}
                {Array.from({ length: emptyStars }, (_, index) => (
                    <StarIconOutline key={index} size={12} />
                ))}
            </>
        )
    }


    const handleAddToCart = () => {
        if (cartItems.find((item: CartItem) => item._id === itemInfo?._id)) {
            setOpenCartDrawer(true)
            return
        }
        else {
            addItemToCart({
                _id: itemInfo?._id || '',
                name: itemInfo?.name || '',
                price: itemInfo?.price || 0,
                quantity: quantity,
                image: itemInfo?.image || '',
            })
            message.success('Item added to cart')
        }
    }



    return (
        <>
            <div className="container pt-8 max-w-screen-xl mx-auto">
                <div className='w-full h-full bg-white p-8 flex gap-8 rounded-xl'>
                    {/* PRODUCT IMAGE */}
                    <div className="h-96 aspect-square rounded-lg border border-gray-200">
                        <img src={itemInfo?.image} alt={itemInfo?.name + ' image'} className='w-full h-full object-cover' />
                    </div>

                    <div className='h-full w-full flex flex-col gap-5 relative'>
                        {/* PRODUCT NAME AND BRAND */}
                        <div>
                            <p className='text-xl font-semibold text-gray-600'>{itemInfo?.name}</p>
                            {/* <p className='text-sm text-gray-500'>{itemInfo?.brand}</p> */}
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className='-mt-3'>
                            <p className='text-2xl font-semibold'>
                                ${itemInfo?.price}</p>
                        </div>

                        {/* PRODUCT DESCRIPTION */}
                        <div>
                            <p className='text-sm text-gray-500'>{itemInfo?.description}</p>
                        </div>

                        {/* PRODUCT RATING */}
                        <div
                            className={`w-fit border ${rating >= 3 ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500' : 'border-rose-500 bg-rose-500/10 text-rose-500'} flex items-center py-1 px-1.5 rounded-md`}>
                            {getRatingIcon(rating)}
                        </div>

                        {/* PRODUCT OFFERS   */}
                        <div>
                            <p className='text-sm text-gray-600 font-semibold'>Offers :</p>
                            {/* {itemInfo?.offers && itemInfo?.offers.length > 0 ? (
                                <p className='text-sm text-gray-500'>{itemInfo?.offers || 'No offers available'}</p>
                            ) : (  */}
                            <p className='text-sm text-gray-500'>No offers available</p>
                            {/* })} */}
                        </div>

                        {/* PRODUCT QUANTITY */}
                        <div className='justify-self-end flex items-center gap-2'>
                            <p className='text-sm text-gray-600 font-semibold'>Set Quantity :</p>
                            <InputNumber min={1} max={maxQuantity} value={quantity} onChange={(value) => setQuantity(value || 1)} />
                        </div>

                        {/* ADD TO CART AND BUY NOW BUTTONS */}
                        <div className="flex gap-2">
                            <button
                                onClick={handleAddToCart}
                                className={`${inCart ? 'bg-gray-400 hover:bg-gray-500 border border-gray-500' : 'bg-emerald-500 hover:bg-emerald-600'} w-fit text-sm font-semibold justify-self-end text-white px-4 py-2 rounded-md group`}
                            >
                                {!inCart ?
                                    'Add to Cart' :
                                    <>
                                        <span className='group-hover:hidden'>
                                            Added to Cart
                                        </span>
                                        <span className='hidden group-hover:block'>
                                            Go to Cart
                                        </span>
                                    </>
                                }
                            </button>
                            <button
                                className='bg-emerald-500 hover:bg-emerald-600 w-fit text-sm font-semibold justify-self-end text-white px-4 py-2 rounded-md'
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* PRODUCT FAVORITE AND SHARE */}
                        <div className='absolute top-5 right-5 flex  gap-2'>
                            {/* FAVORITE BUTTON */}
                            <button className='w-8 h-8 border border-gray-200 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 hover:text-rose-600 transition-all duration-150 group'>
                                {/* <WishlistIcon size={24} /> */}
                                <HeartIconOutline size={20} className='group-hover:hidden' />
                                <HeartIconFill size={20}
                                    className='hidden group-hover:block' />
                            </button>

                            {/* SHARE BUTTON */}
                            <button
                                onClick={() => setOpenShareModal(true)}
                                className='w-8 h-8 border border-gray-200 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-200 hover:text-gray-600 transition-all duration-150 group'
                            >
                                <ShareIconOutline size={20} className='group-hover:hidden' />
                                <ShareIconFill size={20}
                                    className='hidden group-hover:block' />
                            </button>
                            {/* SHARE MODAL */}
                            <Modal
                                open={openShareModal}
                                onCancel={() => setOpenShareModal(false)}
                                footer={null}
                                title={<p className='text-md font-semibold text-gray-800'>Share on</p>}
                                className='max-w-fit'
                            >
                                <div className="w-36 mt-3 m-auto grid grid-cols-3 gap-2">
                                    <WhatsappShareButton className='flex items-center justify-center' url={window.location.href}>
                                        <WhatsappIcon size={32} round={true} />
                                    </WhatsappShareButton>
                                    <FacebookShareButton className='flex items-center justify-center' url={window.location.href}>
                                        <FacebookIcon size={32} round={true} />
                                    </FacebookShareButton>
                                    <TwitterShareButton className='flex items-center justify-center' url={window.location.href}>
                                        <TwitterIcon size={32} round={true} />
                                    </TwitterShareButton>
                                    <EmailShareButton className='flex items-center justify-center' url={window.location.href}>
                                        <EmailIcon size={32} round={true} />
                                    </EmailShareButton>
                                    <TelegramShareButton className='flex items-center justify-center' url={window.location.href}>
                                        <TelegramIcon size={32} round={true} />
                                    </TelegramShareButton>
                                    <LinkedinShareButton className='flex items-center justify-center' url={window.location.href}>
                                        <LinkedinIcon size={32} round={true} />
                                    </LinkedinShareButton>
                                </div>
                            </Modal>

                        </div>

                        {/* seller details */}
                        <div className='flex gap-2 items-center'>
                            <p className='text-sm text-gray-600 font-semibold'>Sold By :</p>
                            <p className='text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-800 font-semibold cursor-pointer'>
                                UrbanBuy
                            </p>
                        </div>
                    </div>
                </div>
            </div >


            {/* SIMILAR ITEMS */}
            <CardsContainer items={similarItems} showFilter={false} title='You may also like' style='container pt-8 max-w-screen-xl mx-auto mb-5 bg-transparent' />
        </>
    )
}

export default ProductDetails