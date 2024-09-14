import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import UpdatePassword from './UpdatePassword'
import logo from '../../assets/logo.svg';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isSignup, setIsSignup] = useState(true);
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
        <div id="login-container" className="w-3/5 h-3/4 min-h-96 bg-emerald-700 rounded-2xl overflow-hidden center-items">
            <div className="center-items w-1/2 h-full bg-slate-900/0 flex-col gap-2">
                <h1 className='login-head relative w-fit px-2 py-1 font-bold text-center'>
                    {isLogin && "LOG IN"}
                    {isSignup && "SIGN UP"}
                    {isUpdatePassword && "UPDATE PASSWORD"}
                    <div className="left-1/2 right-1/2 -bottom-0.5 h-[3px] bg-emerald-600 rounded-full absolute animate-1"></div>
                </h1>

                {/* AUTHENTICATION COMPONENTS */}
                {isLogin && <Login onForgetPassword={handleForgetPassword} onSignup={handleSignup} />}
                {isSignup && <Signup onLogin={handleLogin} />}
                {isUpdatePassword && <UpdatePassword />}
            </div>

            <div className="center-items w-1/2 h-full bg-emerald-900/80 select-none">
                <img src={logo} alt="logo" className='w-2/3 h-2/3 min-w-1/2 min-h-1/2 drop-shadow-2xl' />
            </div>
        </div>
    );
};

export default Auth;
