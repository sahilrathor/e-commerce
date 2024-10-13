import axios from "axios";
import Cookies from 'js-cookie';

const fetchItems = async () => {

    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/items`, {
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

export default fetchItems;
