import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPasswordResetToken } from '../services/operations/authAPI';


const ForgotPassword = () => {



    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }

    return (
        <div className='text-white flex items-center justify-center'>
            {
                loading ? (<div>Loading...</div>) : (
                    <div className='flex items-start justify-center flex-col w-[23%] gap-3 translate-y-[40%]'>
                        <h1 className='text-3xl font-bold '>
                            {
                                !emailSent ? "Reset Your Password" : "Check Your Email"
                            }
                        </h1>
                        <p className='text-sm text-richblack-200'>
                            {
                                !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`
                            }
                        </p>

                        <form onSubmit={handleOnSubmit} className='flex flex-col gap-3 w-full mt-4'>
                            {
                                !emailSent && (
                                    <label className='flex flex-col gap-3'>
                                        <p className='text-sm text-richblack-200'>Email Address<span className="text-brown-1">*</span>: </p>
                                        <input className=' w-[100%] px-3 py-2 rounded-lg bg-richblack-700' type="email" required name='Email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
                                    </label>
                                )
                            }

                            <button type="submit" className='mt-3 w-full rounded-lg bg-yellow-50 text-richblack-900 p-2'>
                                {
                                    !emailSent ? "Reset Pasword" : "Resend Email"
                                }
                            </button>

                        </form>

                        <Link to="/login">
                            <p className='flex justify-center gap-2 text-sm items-center'><span><HiOutlineArrowNarrowLeft /></span> Back to Login</p>
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default ForgotPassword
