import { Item } from "../interfaces/item";
import axios from "axios";
import Cookies from 'js-cookie';

export const fetchItems = async (): Promise<Item[]> => {
    console.log('cookie', Cookies.get('jwt'));

    try {
        const response = await axios.get("http://localhost:3000/api/items", {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }   
}