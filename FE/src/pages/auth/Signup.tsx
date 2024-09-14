// import React from 'react'
// import {message} from 'antd'
// import { MouseEvent, useState } from 'react'
// import { loginData } from '../interfaces/auth'
// import useLogin from '../hooks/login'

// const Login = () => {

//     const login = useLogin()

//     const [formData, setFormData] = useState<loginData>({
//         userName: "",
//         password: "",
//         rememberMe: false
//     })



//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault()

//         if (!formData?.userName || !formData?.password) {
//             // alert('Please fill all the fields')
//             message.error("Please fill all the fields!")
//             return
//         }

//         await login(formData);
//         // console.log('login creds:', formData)

//     }

//     // const accentColor = "emerald-600";
//     // const hoverAccentColor = "emerald-700";

//     return (
//         // <div className="w-full h-[100dvh] bg-slate-900 text-slate-100 center-items">
//         <div id="login-container" className="w-3/5 h-3/4 bg-emerald-700 rounded-2xl overflow-hidden center-items">

//             {/* left box */}
//             <div className="center-items w-1/2 h-full bg-slate-900/10">
//                 <form action="" className='px-16 flex flex-col gap-3 w-full items-center'>

//                     {/* login heading */}
//                     <h1 className='login-head relative w-16 text-center'>LOGIN
//                         <div className={`left-1/2 right-1/2 -bottom-0.5 h-[3px] bg-emerald-600 rounded-full absolute animate-1`}></div>
//                         {/* <div className={`left-1/2 right-1/2 -bottom-0.5 h-[3px] bg-${accentColor} rounded-full absolute animate-1`}></div> */}
//                     </h1>

//                     {/* USERNAME */}
//                     <input type="text" placeholder="Username"
//                         name="userName"
//                         value={formData?.userName}
//                         onChange={handleChange}
//                         className='w-full h-9 rounded-md py-auto px-3 outline-none border-none focus:ring-2 ring-emerald-600  text-slate-700'
//                     />

//                     {/* PASSWORD */}
//                     <input type="password" placeholder="Password"
//                         name="password"
//                         value={formData?.password}
//                         onChange={handleChange}
//                         className='w-full h-9 rounded-md py-auto px-3 outline-none  focus:ring-2 focus:ring-emerald-600   text-slate-700' />

//                     {/* REMEMBER ME */}
//                     <div className="center-items gap-1 bg-slate-200/20 rounded-sm pr-1 self-start">
//                         <input type="checkbox" name="" id=""
//                             checked={formData?.rememberMe}
//                             onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
//                             className='size-3 bg-purple-600 text-slate-' />
//                         <label className="text-xs tracking-tighter">Remember me</label>
//                     </div>

//                     <button
//                         onClick={handleSubmit}
//                         className= {`w-full h-10 rounded-md bg-emerald-600 hover:bg-emerald-700`} >Login</button>
//                         {/* // className= {`w-full h-10 rounded-md bg-${accentColor} hover:bg-${hoverAccentColor}`} >Login</button> */}
//                 </form>
//             </div>

//             {/* right box */}
//             <div className="center-items w-1/2 h-full bg-slate-200/10">
//                 <h1>LOGO</h1>
//             </div>
//         </div>
//         // </div>
//     )
// }

// export default Login


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
