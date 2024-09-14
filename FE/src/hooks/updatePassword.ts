import axios from 'axios';
import { useState } from 'react';
import { updatePasswordData } from '../interfaces/auth';
import { message } from 'antd';

const useUpdatePassword = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [isLoading, setIsLoading] = useState(false);

    const updatePassword = async (updatePasswordData: updatePasswordData) => {
        setIsLoading(true);
        try {
            const res = await axios.patch(`${apiUrl}/api/auth/updatePassword`, updatePasswordData, { withCredentials: true });
            const data = res.data;

            console.log(data);

            if (res.status === 200) {
                message.success('Password updated successfully');
            }
        } catch (err: any) {
            message.error(err.response?.data?.error || 'An error occured while updating the password')
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return { updatePassword, isLoading };
}

export default useUpdatePassword;