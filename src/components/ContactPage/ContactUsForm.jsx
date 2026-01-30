import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { contactusEndpoint } from '../../services/apis';
import { apiConnector } from '../../services/apiConnector';
import CountryCode from "../../data/countrycode.json"
const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful }
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        phoneNo: "",
        message: ""
      })
    }
  }, [reset, isSubmitSuccessful]);

  const submitContactForm = async (data) => {
    console.log("Logging Data: ", data);
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = "OK"
      console.log("Logging Response: ", response);
      setLoading(false);
    }
    catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitContactForm)} className='flex flex-col gap-3 w-[80%]'>

      <div className='flex items-center justify-start gap-4'>
        {/* firstName */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='firstName' className='text-base text-richblack-200'>First Name: </label>
          <input type="text"
            name="firstName"
            id="firstName"
            placeholder='Enter Your First Name'
            className='bg-richblack-700 p-3 rounded-lg'
            {...register('firstName', { required: true })}
          />
          {
            errors.firstName && (
              <span>
                Please enter Your name
              </span>
            )
          }
        </div>

        {/* lastName */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='lastName' className='text-base text-richblack-200'>Last Name: </label>
          <input type="text"
            name="lastName"
            id="lastName"
            placeholder='Enter Your Last Name'
            className='bg-richblack-700 p-3 rounded-lg'
            {...register('lastName', { required: true })}
          />
          {
            errors.lastName && (
              <span>
                Please enter Your name
              </span>
            )
          }
        </div>
      </div>
      {/* email */}
      <div className='flex flex-col gap-2'>
        <label htmlFor="email" className='text-base text-richblack-200'>Email Address: </label>
        <input type="email"
          name='email'
          id='email'
          className=' bg-richblack-700 p-3 rounded-lg'
          placeholder='Enter Your Email Address'
          {
          ...register(("email"), { required: true })
          }
        />
        {
          errors.email && (
            <span>Please enter your email</span>
          )
        }
      </div>

      {/* phone number */}
      <div className='flex flex-col gap-2'>
        <label htmlFor="phoneNo">Phone No.: </label>
        <div>

          {/* dropdown */}
          <div className='flex gap-3'>
            <select className=' bg-richblack-700 p-3 rounded-lg w-[30%]' name="dropdown" id="dropdown" {...register("countrycode", { required: true })}>
              {
                CountryCode.map((element, index) => {
                  return (
                    <option value={element.code} key={index}>
                      {element.code} - {element.country}
                    </option>
                  )
                })
              }
            </select>

            <input className=' bg-richblack-700 p-3 w-[70%] rounded-lg' type="tel" inputMode="numeric" name="phoneNo" id="phoneNo" placeholder='Please Enter your Phone Number' {...register("phoneNo", { required: true, maxLength: { value: 10, message: "Invalid Phone Number" }, minLength: { value: 8, message: "Invalid Phone Number" } })} /> {
              errors.phoneNo && (
                <span>Please enter your phone number</span>
              )
            }
          </div>
        </div>
      </div>

      {/* message */}
      <div className='flex flex-col gap-2'>
        <label htmlFor="message" className='text-base text-richblack-200'>Message: </label>
        <textarea className=' bg-richblack-700 p-3 rounded-lg' name="message" id="message" cols="30" rows="4" placeholder='Please Enter your message'
          {...register("message", { required: true })}
        />

        {
          errors.message && (
            <span>Please enter your message</span>
          )
        }

      </div>

      <button type='submit' className='p-3 bg-yellow-50 text-richblack-900 rounded-lg mt-2 hover:scale-90 transition-all duration-200 text-[16px]'>Send Message</button>
    </form>
  )
}

export default ContactUsForm
