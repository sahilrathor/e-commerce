import { useParams } from "react-router-dom";
import useItemsStore from "../stores/useItemStore";
import { useEffect, useState } from "react";
import { Item } from "../interfaces/item";
import CardsContainer from "../components/cards-list/CardsContainer";

const ProductCategoryPage = () => {
    const { category } = useParams();
    const list = useItemsStore(state => state.items)
    const [filteredItems, setFilteredItems] = useState<Item[]>([])
    

    useEffect(() => {
        const sameCategoryItems = list.filter((item: Item) => item.category.includes(category?.toLowerCase() || ''))
        setFilteredItems(sameCategoryItems)
    }, [list, category])

    console.log('list', list)
    console.log('filteredItems', filteredItems)

    return (
        <div className="container py-8">
            <CardsContainer title={category || ''} items={filteredItems} />
        </div>
    )
}

export default ProductCategoryPage;
