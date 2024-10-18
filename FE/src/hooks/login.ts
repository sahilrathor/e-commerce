import { useState } from 'react';
import axios from 'axios';
import {message} from 'antd'
import { loginData } from '../interfaces/auth';
import { setCookie } from '../utils/sessionUtils';

const useLogin = () => {
    const apiUrl = import.meta.env.VITE_API_URL; // Environment variable for the API URL
    const [isLoading, setIsLoading] = useState(false); // Loading state
    // const setLoggedInUser = useLoggedInUser(state => state.setAuthenticated);

    const login = async (loginData: loginData) => {
        const success = handleInputErrors(loginData);
        if (!success) return;

        setIsLoading(true); 
        try {
            const res = await axios.post(
                `${apiUrl}/auth/login`, 
                loginData, 
                { withCredentials: true }
            );

            const data = res.data;

            if (res.status === 200) {
                message.success('Logged in successfully');
                console.log(data);
                setCookie('Token', data.token);
                return true
            }

        } catch (err: any) {
            message.error(err.response?.data?.error || 'An error occurred during login');
            return false
        } finally {
            setIsLoading(false); 
        }
    };

    return { login, isLoading }; 
};

export default useLogin;

// input validation
const handleInputErrors = ({ userName, password }: loginData): boolean => {
    if (!userName || !password) {
        message.error('Please fill in all the fields');
        return false;
    }
    return true;
};
