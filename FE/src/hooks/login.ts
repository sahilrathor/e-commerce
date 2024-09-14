// import axios from 'axios'
// import { loginData } from '../interfaces/auth';

// const useLogin = async () => {
//     const apiUrl = 'http://localhost:5000/api/auth/login';

//     const login = async ({userName, password, rememberMe} : loginData) => {
//         try {
//             const response = await axios.post(apiUrl, { userName, password, rememberMe });
//             if (response.status === 200) {
//                 return response.data;
//             } else {
//                 throw new Error('An error occurred during login');
//             }
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 throw new Error(error.response?.data?.message || 'An error occurred during login');
//             } else {
//                 throw new Error('An unexpected error occurred');
//             }
//         }
//     }

//     return login;
// }

// export default useLogin;


import { useState } from 'react';
import axios from 'axios';
import {message} from 'antd'
import { loginData } from '../interfaces/auth';

const useLogin = () => {
    const apiUrl = import.meta.env.VITE_API_URL; // Environment variable for the API URL
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const login = async (loginData: loginData) => {
        // Validate input fields
        const success = handleInputErrors(loginData);
        if (!success) return;

        setIsLoading(true); 
        try {
            // Make a POST request using axios
            const res = await axios.post(
                `${apiUrl}/api/auth/login`, 
                loginData, 
                { withCredentials: true } // Include cookies if required by the API
            );

            const data = res.data;

            if (res.status === 200) {
                message.success('Logged in successfully');
                console.log(data);
            }

        } catch (err: any) {
            message.error(err.response?.data?.error || 'An error occurred during login');
            // console.log(err);
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
