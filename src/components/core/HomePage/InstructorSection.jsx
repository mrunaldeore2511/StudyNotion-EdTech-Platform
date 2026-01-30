import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "./Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
    return (
        <div className='mt-16'>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-between px-6 md:px-10 lg:px-16">
                <div className="w-full lg:w-[50%] flex justify-center">
                    <img
                        src={Instructor}
                        alt=""
                        className="shadow-white w-full max-w-[300px] md:max-w-[400px] lg:w-[500px]"
                    />
                </div>
                <div className="w-full lg:w-[50%] flex flex-col text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-semibold mb-5">
                        Become an <br /> <HighlightText text={"Instructor"} />
                    </div>

                    <p className="font-medium text-[16px] w-full lg:w-[85%] text-richblack-300 mb-10 lg:mb-16">
                        Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                    </p>

                    <div className='w-fit mx-auto lg:mx-0'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex gap-2 w-fit items-center'>
                                Start Teaching Today
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorSection
