import { Item } from "../interfaces/item";

export const fetchItems = async (): Promise<Item[]> => {
    const response = await fetch('http://localhost:3000/api/items');
    const data = await response.json();
    console.log(data)
    return data;
}