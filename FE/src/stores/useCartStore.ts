import { create } from "zustand"
import { CartItem } from "../interfaces/item"

interface CartStore {
    cartItems: CartItem[]
    setCartItems: (items: CartItem[]) => void
    addItemToCart: (item: CartItem) => void
    removeItemFromCart: (id: string) => void
}

const useCartStore = create<CartStore>((set) => ({
    cartItems: [
        {
            _id: '1',
            name: 'Item 1',
            price: 100,
            quantity: 5,
            image: '',
        },
        {
            _id: '2',
            name: 'Item 2',
            price: 200,
            quantity: 2,
            image: '',
        },
    ],
    setCartItems: (items) => set({ cartItems: items }),
    addItemToCart: (item) => set((state) => (
        { cartItems: [...state.cartItems, item] }
    )),
    removeItemFromCart: (id) => set((state) => (
        { cartItems: state.cartItems.filter((item: CartItem) => item._id !== id) }
    )),
}))

export default useCartStore
