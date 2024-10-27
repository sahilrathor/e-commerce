import { Button, Drawer } from "antd"
import useCartDrawerStore from "../stores/UseCartDrawerStore"
import { DeleteOutlined } from "@ant-design/icons"
import { CartItem } from "../interfaces/item"
import useCartStore from "../stores/useCartStore"



const CartDrawer: React.FC = () => {
    const { open, setOpen } = useCartDrawerStore()
    const { cartItems, removeItemFromCart } = useCartStore()


    return (
        <Drawer title="Cart" open={open} placement="right" onClose={() => setOpen(false)}
            className=""
        >
            <div className="w-full h-full m-0 flex flex-col gap-3">
                <ul className="overflow-y-auto">
                    {cartItems.map((item: CartItem, index: number) => (
                        <li
                            key={index}
                            className=" flex justify-between items-center p-2 rounded-md relative group overflow-hidden"
                        >

                            {/* Item Details	 */}
                            <div className="flex items-center gap-3">
                                <img src="" alt=""
                                    className="w-14 h-14 rounded-sm object-contain"
                                />
                                <div className="flex flex-col">
                                    <p>{item.name}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </div>

                            {/* Item Price	 */}
                            <div className="">
                                <p className="text-sm">
                                    <span className="font-semibold text-gray-700">Price: </span> ₹{item.price}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold text-gray-700">Total: </span> ₹{item.price * item.quantity}
                                </p>
                            </div>

                            {/* Remove Item	     */}
                            <div className="absolute top-0 right-0 left-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-500/20 backdrop-blur-[1px] flex justify-center items-center">
                                <Button
                                    danger
                                    type="primary"
                                    className=""
                                    onClick={() => removeItemFromCart(item._id)}
                                >
                                    <DeleteOutlined />
                                </Button>
                            </div>
                        </li>
                    ))}

                </ul>

                <div className="bg-blue-200/50 flex flex-col gap-3 p-3 rounded-md">
                    <div className="flex justify-between items-center">
                        <p className="text-sm ">
                            <span className="font-semibold text-gray-700">Total: </span>
                            ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold text-gray-700">Shipping: </span>
                            ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.1}
                        </p>
                    </div>
                    <button className="w-full bg-blue-500 text-white p-2 rounded-md">Checkout</button>
                </div>
            </div>
        </Drawer>
    )
}

export default CartDrawer