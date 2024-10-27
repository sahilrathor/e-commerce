import { create } from "zustand";
import { Item } from "../interfaces/item";

interface ItemStore {
    items: Item[];
    setItems: (items: Item[]) => void;
}

const useItemStore = create<ItemStore>((set) => ({
    items: [],
    setItems: (items: Item[]) => set({ items }),
}))

export default useItemStore