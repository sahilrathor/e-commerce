import { create } from "zustand"

interface CartDrawerStore {
    open: boolean
    setOpen: (open: boolean) => void
}

const useCartDrawerStore = create<CartDrawerStore>((set) => ({
    open: false,
    setOpen: (open) => set({ open })
}))

export default useCartDrawerStore