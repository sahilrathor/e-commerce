import React, { MouseEvent, useState } from 'react';
import { message } from 'antd';
import { loginData } from '../../interfaces/auth';
import useLogin from '../../hooks/login';

interface LoginProps {
    onForgetPassword: () => void;
    onSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onForgetPassword, onSignup }) => {
    const { login, isLoading } = useLogin(); 

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
            await login(formData); 
        } catch (err) {
            message.error('Login failed');
        } finally {
            setFormData({
                userName: "",
                password: "",
                rememberMe: false
            });
        }
    };

    return (
                <form className='px-16 flex flex-col gap-3 w-full items-center'>
                    

                    {/* USERNAME */}
                    <input
                        type="text"
                        placeholder="Username"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none border-none focus:ring-2 ring-emerald-600 '
                    />

                    {/* PASSWORD */}
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none focus:ring-2 focus:ring-emerald-600'
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
                    className='text-xs tracking-tighter hover:bg-slate-200 hover:text-emerald-600 bg-slate-200/20 rounded-sm px-1 cursor-pointer'
                    onClick={onForgetPassword}
                    >
                        Forgot Password ?
                    </div>
                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading} 
                        className={`w-full h-10 rounded-md bg-emerald-600 hover:bg-emerald-700`}
                    >
                        {isLoading ? 'Logging in...' : 'Log in'}
                    </button>
                    <p 
                    className='text-xs text-slate-900 font-semibold hover:bg-slate-50 rounded-md px-2 py-0.5'
                    onClick={onSignup}
                    >
                        Don't have an account?
                    </p>
                </form>
    );
};

export default Login;
