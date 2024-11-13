import React, { MouseEvent, useState } from 'react';
import { message } from 'antd';
import { signupData } from '../../interfaces/auth';
import useSignup from '../../hooks/signup';

const Signup: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const { signup, isLoading } = useSignup(); 

    const [formData, setFormData] = useState<signupData>({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
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

        // console.log(formData);
        try {
            await signup(formData);
        } catch (err) {
            message.error('Login failed');
        } finally {
            setFormData({
                firstName: "",
                lastName: "",
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
                gender: "", 
            });
        }
    };

    return (
        <form className='px-16 flex flex-col gap-3 w-full items-center'>

            {/* FIRST NAME */}
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none border-none focus:ring-2 ring-emerald-600 '
            />

            {/* LAST NAME */}
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none border-none focus:ring-2 ring-emerald-600 '
            />

            {/* USERNAME */}
            <input
                type="text"
                placeholder="Username"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none border-none focus:ring-2 ring-emerald-600 '
            />

            {/* EMAIL */}
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
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

            {/* CONFIRM PASSWORD */}
            <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none focus:ring-2 focus:ring-emerald-600'
            />

            <div className="flex justify-between w-full select-none">
                {/* GENDER */}
                <div className="center-items self-start gap-2">
                    <div className="center-items bg-slate-200/20 rounded-sm px-1 gap-1">
                        <input
                            type="checkbox"
                            id="male"
                            name="male"
                            checked={formData.gender === "male"}
                            onChange={() => setFormData({ ...formData, gender: "male" })}
                            className='size-3 accent-emerald-600 hover:accent-emerald-700'
                        />
                        <label htmlFor="male" className="text-xs tracking-tighter">Male</label>
                    </div>

                    <div className="center-items bg-slate-200/20 rounded-sm px-1 gap-1">
                        <input
                            type="checkbox"
                            id="female"
                            name="female"
                            checked={formData.gender === "female"}
                            onChange={() => setFormData({ ...formData, gender: "female" })}
                            className='size-3 accent-emerald-600 hover:accent-emerald-700'
                        />
                        <label htmlFor="female" className="text-xs tracking-tighter">Female</label>
                    </div>
                </div>
            </div>


            {/* LOGIN BUTTON */}
            <button
                onClick={handleSubmit}
                disabled={isLoading} 
                className={`w-full h-10 rounded-md bg-emerald-600 hover:bg-emerald-700`}
            >
                {isLoading ? 'Signing up...' : 'Sign up'}
            </button>
            <p
                className='text-xs text-slate-900 font-semibold hover:bg-slate-50 rounded-md px-2 py-0.5'
                onClick={onLogin}
            >
                Already have an account? 
            </p>
        </form>
    );
};

export default Signup;
