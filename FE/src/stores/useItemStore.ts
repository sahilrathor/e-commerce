import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Item } from "../interfaces/item";

const ItemsStore = (set: (state: Item[]) => void) => ({
    items: [],
    setItems: (items: Item[]) => set(items),
})

const useItemsStore = create(
    devtools(
        persist(ItemsStore, {
            name: "items",
        })
    )
)

export default useItemsStore