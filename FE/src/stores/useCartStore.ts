import { create } from "zustand"
import { CartItem } from "../interfaces/item"

interface CartStore {
    cartItems: CartItem[]
    setCartItems: (items: CartItem[]) => void
    addItemToCart: (item: CartItem) => void
    removeItemFromCart: (id: string) => void
}

const useCartStore = create<CartStore>((set) => ({
    cartItems: [],
    setCartItems: (items: CartItem[]) => set({ cartItems: items }),
    addItemToCart: (item: CartItem) => set((state) => (
        { cartItems: [...state.cartItems, item] }
    )),
    removeItemFromCart: (id: string) => set((state) => (
        { cartItems: state.cartItems.filter((item: CartItem) => item._id !== id) }
    )),
}))

export default useCartStore
