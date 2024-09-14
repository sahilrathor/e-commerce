
import React, { MouseEvent, useState } from 'react';
import { message } from 'antd';
import { updatePasswordData } from '../../interfaces/auth';
import useUpdatePassword from '../../hooks/updatePassword';

const UpdatePassword = () => {
    const { updatePassword, isLoading } = useUpdatePassword(); 

    const [formData, setFormData] = useState<updatePasswordData>({
        userName: "",
        newPassword: "",
        confirmNewPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!formData?.userName || !formData?.newPassword || !formData?.confirmNewPassword) {
            message.error("Please fill all the fields!");
            return;
        }

        try {
            await updatePassword(formData);
        } catch (err) {
            message.error('Login failed');
        } finally {
            setFormData({
                userName: "",
                newPassword: "",
                confirmNewPassword: ""
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
                        placeholder="New Password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none focus:ring-2 focus:ring-emerald-600'
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmNewPassword"
                        value={formData.confirmNewPassword}
                        onChange={handleChange}
                        className='w-full h-9 rounded-md bg-slate-200 text-slate-900 py-auto px-3 outline-none focus:ring-2 focus:ring-emerald-600'
                    />



                    {/* LOGIN BUTTON */}
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading} 
                        className={`w-full h-10 rounded-md bg-emerald-600 hover:bg-emerald-700`}
                    >
                        {isLoading ? 'Updating...' : 'Change Password'}
                    </button>
                </form>
    );
};

export default UpdatePassword;
