import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import UpdatePassword from './UpdatePassword'
import './style.css'

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isSignup, setIsSignup] = useState(false);
    const [isUpdatePassword, setIsUpdatePassword] = useState(false);

    const handleForgetPassword = () => {
        setIsLogin(false);
        setIsSignup(false);
        setIsUpdatePassword(true);
    }

    const handleSignup = () => {
        setIsLogin(false);
        setIsSignup(true);
        setIsUpdatePassword(false);
    }

    const handleLogin = () => {
        setIsLogin(true);
        setIsSignup(false);
        setIsUpdatePassword(false);
    }

    return (
        // <div id="login-b" className="w-full h-full min-h-screen center-items">
        //     <div id="login-container" className="w-3/5 h-3/4 min-h-96 bg-emerald-700 rounded-2xl overflow-hidden center-items absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        //         <div className="center-items w-1/2 h-full bg-slate-900/0 flex-col gap-2">
        //             <h1 className='login-head relative w-fit px-2 py-1 font-bold text-center'>
        //                 {isLogin && "LOG IN"}
        //                 {isUpdatePassword && "UPDATE PASSWORD"}
        //                 <div className="left-1/2 right-1/2 -bottom-0.5 h-[3px] bg-emerald-600 rounded-full absolute animate-1"></div>
        //             </h1>

        //             {/* AUTHENTICATION COMPONENTS */}
        //             {isLogin && <Login onForgetPassword={handleForgetPassword} onSignup={handleSignup} />}
        //             {isUpdatePassword && <UpdatePassword />}
        //         </div>

        //         <div className="center-items w-1/2 h-full bg-emerald-900/80 select-none flex-col gap-2">
        //             <h1 className='login-head relative w-fit px-2 py-1 font-bold text-center'>
        //                 {isSignup && "SIGN UP"}
        //                 <div className="left-1/2 right-1/2 -bottom-0.5 h-[3px] bg-emerald-600 rounded-full absolute animate-1"></div>
        //             </h1>

        //             {isSignup && <Signup onLogin={handleLogin} />}
        //             {/* <img src={logo} alt="logo" className='w-2/3 h-2/3 min-w-1/2 min-h-1/2 drop-shadow-2xl' /> */}
        //         </div>
        //     </div>
        // </div>
        <div id="login-container" className='w-full h-[100dvh] bg-emerald-700 center-items'>
            <div className='h-auto sm:h-auto w-full sm:w-96 py-5 px-10 sm:rounded-3xl bg-slate-100 center-items flex-col gap-5'>
                <h1 className='login-head  relative w-fit mx-auto px-2 py-0'>
                    <p className='text-2xl font-bold drop-shadow-lg text-emerald-600'>
                        {isLogin && "LOG IN"}
                        {isUpdatePassword && "UPDATE PASSWORD"}
                        {isSignup && "SIGN UP"}
                    </p>
                    <div className="left-1/2 right-1/2 bottom-0 h-[2px] bg-emerald-600 rounded-full absolute animate-1"></div>
                </h1>
                {isLogin && <Login onForgetPassword={handleForgetPassword} onSignup={handleSignup} />}
                {isUpdatePassword && <UpdatePassword />}
                {isSignup && <Signup onLogin={handleLogin} />}
            </div>
        </div>
    );
};

export default Auth;
