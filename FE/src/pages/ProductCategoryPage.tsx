import { useParams } from "react-router-dom";
import useItemsStore from "../stores/useItemStore";
import { useEffect, useState } from "react";
import { Item, ItemStore } from "../interfaces/item";
import CardsContainer from "../components/cards-list/CardsContainer";

const ProductCategoryPage = () => {
    const { category } = useParams();
    const list = useItemsStore(state => state.items)
    const [filteredItems, setFilteredItems] = useState<Item[]>([])
    

    useEffect(() => {
        const sameCategoryItems = list.filter((item: Item) => item.category.toLowerCase() === category?.toLowerCase())
        setFilteredItems(sameCategoryItems)
    }, [list, category])


    return (
        <div className="container px-10 py-10 pt-0 mt-24">
            <div className="bg-white p-8 rounded-xl flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{category}</h1>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Filter</button>
            </div>
            <CardsContainer title={category || ''} items={filteredItems} showFilter={false} />
        </div>
    )
}

export default ProductCategoryPage;
