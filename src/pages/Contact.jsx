import React from "react"

import Footer from "../components/common/Footer"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactForm"
import ReviewSlider from "../components/common/ReviewSlider"

const Contact = () => {
  return (
    <div>
      {/* Top Section */}
      <div
        className="
          mx-auto 
          mt-10 sm:mt-14 md:mt-20
          flex 
          w-11/12 
          max-w-maxContent 
          flex-col 
          justify-between 
          gap-10 
          text-white 
          lg:flex-row
        "
      >
        {/* Contact Details */}
        <div className="w-full lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      {/* Reviews Section */}
      <div
        className="
          relative 
          mx-auto 
          my-14 sm:my-16 md:my-20
          flex 
          w-11/12 
          max-w-maxContent 
          flex-col 
          items-center 
          justify-between 
          gap-8 
          bg-richblack-900 
          text-white
          px-4 sm:px-6
        "
      >
        <h1 className="mt-6 sm:mt-8 text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
          Reviews from other learners
        </h1>

        <ReviewSlider />
      </div>

      <Footer />
    </div>
  )
}

export default Contact
