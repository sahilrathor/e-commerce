import { Item } from "../interfaces/item";

export const fetchItems = async (): Promise<Item[]> => {
    try {
        const response = await fetch('http://localhost:3000/api/items');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }   
}