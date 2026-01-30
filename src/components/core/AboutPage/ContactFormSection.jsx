import React from 'react'
import ContactUsForm from "../../ContactPage/ContactUsForm"

const ContactFormSection = () => {
    return (
        <div className='mx-auto gap-3 flex flex-col items-center justify-center text-richblack-5'>
            <h1 className='text-3xl font-bold'>
                Get in Touch
            </h1>
            <p className='text-sm text-richblack-200'>
                We’d love to here for you, Please fill out this form.
            </p>
            <div className='flex items-center justify-center'>
                <ContactUsForm />
            </div>
        </div>
    )
}

export default ContactFormSection
