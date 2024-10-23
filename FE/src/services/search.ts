import useItemsStore from "../stores/useItemStore"

const searchItems = async ({query}: {query: string}) => {
    const items = useItemsStore.getState().items
    
    if (query) {
        return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) || item.category.some(category => category.toLowerCase().includes(query.toLowerCase())) || item.description.toLowerCase().includes(query.toLowerCase()))
    }
    return items
}

export default searchItems