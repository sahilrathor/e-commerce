import { create } from "zustand";
import { Item, ItemStore } from "../interfaces/item";

const useItemsStore = create<ItemStore>((set) => ({
    items: [],
    setItems: (items: Item[]) => set({ items }),
}))

export default useItemsStore