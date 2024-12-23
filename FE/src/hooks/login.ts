import { useState } from 'react';
import axios from 'axios';
import {message} from 'antd'
import { loginData } from '../interfaces/auth';
import { setCookie } from '../utils/sessionUtils';
import { useNavigate } from 'react-router-dom';
import { useAppInfo } from '../stores/app-info';

const useLogin = () => {
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_URL;
    const [isLoading, setIsLoading] = useState(false); 
    const { setUser } = useAppInfo();

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

                if (loginData.rememberMe) {
                    setCookie('Token', data.token, { expires: 30 });
                } else {
                    setCookie('Token', data.token);
                }

                setUser(data.user);

                navigate('/');
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
