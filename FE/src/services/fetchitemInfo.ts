import axios from "axios";
import Cookies from 'js-cookie';

const fetchItemInfo = async (itemId: string) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/items/${itemId}`, {
            headers: {
                Authorization: `Bearer ${Cookies.get('Token')}`
            }
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching item info:", error);
        throw error;
    }
};

export default fetchItemInfo;
