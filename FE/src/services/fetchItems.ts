import axios from "axios";
import Cookies from 'js-cookie';

const fetchItems = async (category?: string[]) => {
    try {
        if (category) {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/items?category=${category}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('Token')}`
                }
            });
            return response.data;
        }
        else {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/items`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('Token')}`
                }
            });
            return response.data;
        }
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
}

export default fetchItems;
