import axios from 'axios';
import { message } from 'antd';
import { useState } from 'react';
import { signupData } from '../interfaces/auth';

const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;

    const signup = async (signupData: signupData) => {
        setIsLoading(true);
        try {
            const res = await axios.post(
                `${apiUrl}/api/auth/signup`, 
                signupData, 
                { withCredentials: true }
            );

            const data = res.data;

            if (res.status === 200) {   
                message.success('Signup successful');
                console.log(data);
            }

        } catch (err: any) {
            message.error(err.response?.data?.error || 'An error occurred during signup');
            console.log(err);
        } finally {
            setIsLoading(false); 
        }
    };

    return { signup, isLoading }; 
};

export default useSignup;   

