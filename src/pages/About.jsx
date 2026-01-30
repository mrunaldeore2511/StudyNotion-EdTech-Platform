import React from 'react'
import HighlightText from "../components/core/HomePage/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/StatsComponent'
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import Footer from "../components/common/Footer"
import ReviewSlider from '../components/common/ReviewSlider'

const About = () => {
    return (
        <div className='flex flex-col gap-12 md:gap-16'>
            {/* section 1 */}
            <section className='flex items-center justify-center bg-richblack-800'>
                <div className='mt-[40px] md:mt-[50px] flex flex-col gap-3 w-full lg:w-[60%] items-center justify-center px-4'>
                    <p className='text-center text-richblack-50 mb-2'>About Us</p>

                    <header className='text-richblack-25 text-3xl md:text-4xl font-bold gap-3 flex flex-col items-center justify-center text-center'>
                        Driving Innovation in Online Education for a <HighlightText text={"Brighter Future"} />
                        <p className='mt-4 text-sm md:text-base font-normal px-2 md:px-4'>
                            Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                        </p>
                    </header>

                    <div className="-mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center translate-y-16 md:translate-y-20">
                        <img src={BannerImage1} alt="" className="w-[200px] md:w-auto" />
                        <img src={BannerImage2} alt="" className="w-[200px] md:w-auto" />
                        <img src={BannerImage3} alt="" className="w-[200px] md:w-auto" />
                    </div>
                </div>
            </section>

            {/* section2 */}
            <section className='flex items-center justify-center mt-32 md:mt-44 text-center mx-auto bg-richblack-900 mb-2 px-4'>
                <p className='text-richblack-5 text-2xl md:text-3xl font-semibold w-full md:w-[72%]'>
                    We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightText text={"combines technology"} />, <span className='text-yellow-200'>expertise</span>, and community to create an <span className='text-yellow-200'>unparalleled educational experience.</span>
                </p>
            </section>

            {/* section 3 */}
            <section className='border-t border-richblack-400 py-4'>
                <div className='mt-12 md:mt-20 flex flex-col items-center justify-center'>
                    <div className='w-11/12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-56'>
                        <div className='w-full lg:w-[32%]'>
                            <h1 className='mb-5 text-2xl md:text-3xl text-pink-400 font-bold'>
                                Our Founding Story
                            </h1>

                            <p className='text-richblack-200 text-sm mb-5'>
                                Our e-learning platform was born out of a shared vision and passion for transforming education.
                            </p>
                            <p className='text-richblack-200 text-sm'>
                                We envisioned a platform that could bridge these gaps and empower individuals from all walks of life.
                            </p>
                        </div>

                        <div className='w-full lg:w-[40%] flex justify-center'>
                            <img src={FoundingStory} alt="" className="w-[300px] md:w-[400px] lg:w-auto" />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-48 w-11/12 mt-16 md:mt-24'>
                        <div className='flex flex-col gap-6 text-richblack-200 text-sm w-full lg:w-[37%]'>
                            <h1 className='text-yellow-200 text-2xl md:text-3xl font-bold'>Our Vision</h1>
                            <p>
                                We set out on a journey to create an e-learning platform that would revolutionize the way people learn.
                            </p>
                        </div>

                        <div className='flex flex-col gap-6 text-richblack-200 text-sm w-full lg:w-[35%]'>
                            <h1 className='text-2xl md:text-3xl'>
                                <HighlightText text={"Our Mission"} />
                            </h1>
                            <p>
                                We wanted to create a vibrant community of learners where individuals can connect and collaborate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <StatsComponent />

            {/* section 5 */}
            <section>
                <LearningGrid />
                <ContactFormSection />
            </section>

            <section className='flex flex-col items-center justify-center px-4'>
                <h1 className='text-3xl md:text-4xl text-richblack-5 font-bold text-center'>
                    Reviews from other Learners
                </h1>
                <ReviewSlider />
            </section>

            <section>
                <Footer />
            </section>
        </div>
    )
}

export default About
