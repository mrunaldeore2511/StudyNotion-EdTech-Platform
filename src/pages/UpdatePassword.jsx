import React from 'react'
import { useDispatch } from 'react-redux';
import { resetPassword } from '../services/operations/authAPI';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const UpdatePassword = () => {
    const { loading } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    })

    const { password, confirmPassword } = formData;
    const handleOnChange = (e) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token));
    }

    return (

        < div className=''>
            {
                loading ? (<div>Loading...</div>) :
                    (
                        <div className='w-[25%] flex flex-col item-start gap-5 translate-x-[150%] translate-y-[25%]'>
                            <h1 className='text-3xl font-bold text-white' >Choose your password</h1>
                            <p className='text-sm text-richblack-200 p-2'>Almost done. Enter your new password and youre all set.</p>
                            <form onSubmit={handleOnSubmit}>

                                <label className='flex flex-col gap-3 p-1'>
                                    <p className='text-sm text-richblack-200'>New Password<span className="text-brown-1">*</span>: </p>
                                    <div className='flex items-center justify-center text-richblack-50 gap-5'>
                                        <input className=' w-[100%] px-3 py-2 rounded-lg bg-richblack-700' type={`${showPassword ? "text" : "password"}`} required name='password' value={password} onChange={handleOnChange} placeholder='Enter Your Passowrd' /><span
                                            onClick={() => { setShowPassword((prev) => !prev) }}
                                        >
                                            {
                                                showPassword ? <IoMdEye fontSize={24} /> : <IoMdEyeOff fontSize={24} />

                                            }
                                        </span>
                                    </div>


                                </label>
                                <label className='flex flex-col gap-3 mt-3 mb-3 p-1'>
                                    <p className='text-sm text-richblack-200'>Confirm New Password<span className="text-brown-1">*</span>: </p>
                                    <div className='flex items-center justify-center text-richblack-50 gap-5'>
                                        <input className=' w-[100%] px-3 py-2 rounded-lg bg-richblack-700' type={`${showConfirmPassword ? "text" : "password"}`} required name='confirmPassword' value={confirmPassword} onChange={handleOnChange} placeholder='Enter Your Confirm Password' />
                                        <span
                                            onClick={() => { setShowConfirmPassword((prev) => !prev) }}
                                        >
                                            {
                                                showConfirmPassword ? <IoMdEye fontSize={24} /> : <IoMdEyeOff fontSize={24} />

                                            }
                                        </span>
                                    </div>
                                </label>

                                <button type="submit" className='mt-3 w-full rounded-lg bg-yellow-50 text-richblack-900 p-2'>
                                    Reset Password
                                </button>
                            </form>

                            <Link to="/login">
                                <p className=' translate-x-[-30%] flex justify-center gap-2 text-sm text-richblack-50 items-center'><span><HiOutlineArrowNarrowLeft /></span> Back to Login</p>
                            </Link>
                        </div>
                    )
            }
        </div >
    )
}

export default UpdatePassword
