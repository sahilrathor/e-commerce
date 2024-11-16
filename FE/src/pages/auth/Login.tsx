import React, { MouseEvent, useState } from 'react';
import { message } from 'antd';
import { loginData } from '../../interfaces/auth';
import useLogin from '../../hooks/login';
import { useNavigate } from 'react-router-dom';
import { useAppInfo } from '../../stores/app-info';

interface LoginProps {
    onForgetPassword: () => void;
    onSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onForgetPassword, onSignup }) => {
    const { login, isLoading } = useLogin(); 
    const navigate = useNavigate();
    const setIsAuthenticated = useAppInfo((state:any) => state.setIsAuthenticated)
    const [formData, setFormData] = useState<loginData>({
        userName: "",
        password: "",
        rememberMe: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!formData?.userName || !formData?.password) {
            message.error("Please fill all the fields!");
            return;
        }

        try {
            const response = await login(formData); 
            if (response) {
                setIsAuthenticated(true)
                navigate('/home');
                setFormData({
                    userName: "",
                    password: "",
                    rememberMe: false
                });
                return true
            }

        } catch (err) {
            message.error('Login failed');
            return false
        }
        return false
    };

    return (
                <form className='w-full max-w-96 mx-auto flex flex-col gap-3 items-center'>
                    

                    {/* USERNAME */}
                    <input
                        type="text"
                        placeholder="Username"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none border-none focus:ring-1 ring-emerald-600 focus:shadow-[0_0_10px_0_#059669] '
                    />

                    {/* PASSWORD */}
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none focus:ring-1 ring-emerald-600 focus:shadow-[0_0_10px_0_#059669]'
                    />

                    <div className='flex justify-between w-full'>
                    {/* REMEMBER ME */}
                    <div className="center-items gap-1 bg-slate-200/20 rounded-sm pr-1 self-start">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                            className='size-3 accent-emerald-600 hover:accent-emerald-700'
                        />
                        <label htmlFor="rememberMe" className="text-xs tracking-tighter cursor-pointer">Remember me</label>
                    </div>

                    <div 
                    className='text-xs tracking-tighter hover:bg-emerald-900/10 hover:text-emerald-600 rounded-md px-1 cursor-pointer'
                    onClick={onForgetPassword}
                    >
                        Forgot Password ?
                    </div>
                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading} 
                        className={`w-full h-10 rounded-md text-white font-semibold bg-emerald-700 hover:bg-emerald-800`}
                    >
                        {isLoading ? 'Logging in...' : 'LOG IN'}
                    </button>
                    <p 
                    className='text-xs text-emerald-700 font-semibold hover:text-emerald-800 hover:bg-emerald-900/5 rounded-md px-1.5 py-0.5 cursor-pointer'
                    onClick={onSignup}
                    >
                        Don't have an account?
                    </p>
                </form>
    );
};

export default Login;
