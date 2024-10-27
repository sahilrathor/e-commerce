import { useParams } from "react-router-dom";
import CardsContainer from "../components/cards-list/CardsContainer";
import { useEffect, useState } from "react";
import fetchItems from "../services/fetchItems";
import { Item } from "../interfaces/item";

const ProductCategoryPage = () => {
    const { category } = useParams();

    // Capitalize the first letter of the category
    let title = ''
    if(category){
        title = category.charAt(0).toUpperCase() + category.slice(1)
    }


    const [items, setItems] = useState<Item[]>([])
    
    useEffect(() => {
        if(category){
            const fetchData = async () => {
                const data = await fetchItems([category]);
                setItems(data);
            }
            fetchData();
        }
    }, [category]); 

    return (
        <div className="container py-8">
            <CardsContainer title={title} items={items} />
        </div>
    )
}

export default ProductCategoryPage;
