import React from 'react'
import HighlightText from './HighlightText'
import knowYourProgress from "../../../assets/Images/Know_your_progress.png"
import compareWithOther from "../../../assets/Images/Compare_with_others.png"
import planYourLesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "./Button"

const LearningLanguageSection = () => {
    return (
        <div className='mt-[80px] md:mt-[120px] lg:mt-[150px]'>
            <div className="flex flex-col items-center px-4 md:px-0">
                <div className='text-3xl md:text-4xl font-semibold text-center'>
                    Your swiss knife for <HighlightText text={"learning any language"} />
                </div>

                <div className='text-center text-richblack-600 mx-auto text-sm md:text-base mt-3 w-full md:w-[70%] lg:w-[55%] font-medium'>
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center mt-8 mb-10 gap-6 md:gap-0'>
                    <img
                        src={knowYourProgress}
                        alt=""
                        className='translate-x-0 md:translate-x-[35%] w-[200px] md:w-auto'
                    />
                    <img
                        src={compareWithOther}
                        alt=""
                        className='translate-x-0 md:translate-x-[3%] w-[200px] md:w-auto'
                    />
                    <img
                        src={planYourLesson}
                        alt=""
                        className='translate-x-0 md:translate-x-[-25%] w-[200px] md:w-auto'
                    />
                </div>

                <CTAButton active={true} linkto={"/signup"}>
                    <div>Learn More</div>
                </CTAButton>
            </div>
        </div>
    )
}

export default LearningLanguageSection
