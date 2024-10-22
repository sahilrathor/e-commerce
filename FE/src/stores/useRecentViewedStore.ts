import { create } from 'zustand'
import { Item } from '../interfaces/item'

interface RecentViewedStore {
    recentlyViewedItems: Item[]
    setRecentlyViewedItems: (items: Item[]) => void
}

const useRecentViewedStore = create<RecentViewedStore>((set) => ({
    recentlyViewedItems: [],
    setRecentlyViewedItems: (items) => set({ recentlyViewedItems: items })
}))

export default useRecentViewedStore
