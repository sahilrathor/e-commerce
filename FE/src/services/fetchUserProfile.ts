import axios from "axios";
import { getCookie } from "../utils/sessionUtils";

const fetchUserProfile = async (id: string) => {
    const token = getCookie('Token');

    try {   
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${id}`,{
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchUserProfile;    