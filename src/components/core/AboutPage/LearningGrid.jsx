import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";

const LearningGridArray = [
    {
        order: -1,
        heading: "World-Class Learning for",
        highlightText: " Anyone, Anywhere",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 3,
        heading: "Certification",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 5,
        heading: "Ready to Work",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
];


const LearningGrid = () => {
    return (
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 mt-10 sm:mt-20 p-4 sm:p-8 lg:p-16 lg:w-fit mx-auto'>
            {
                LearningGridArray.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className={`${index === 0 && "sm:col-span-2 lg:col-span-2 lg:h-[280px] p-4 sm:p-5"}
                            ${card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-4 sm:p-5" : "bg-richblack-800 lg:h-[280px] p-4 sm:p-5"
                                }
                            ${card.order === 3 && "lg:col-start-2"}
                            ${card.order < 0 && "bg-transparent"}
                            `}
                        >
                            {
                                card.order < 0
                                    ? (
                                        <div className='text-richblack-5 w-full lg:w-[91%] flex flex-col pb-5 gap-2 sm:gap-3'>
                                            <div className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>
                                                {card.heading}
                                                <HighlightText text={card.highlightText} />
                                            </div>
                                            <p className='font-medium text-richblack-200 text-sm sm:text-base'>
                                                {card.description}
                                            </p>
                                            <div className='w-fit mt-2 sm:mt-4'>
                                                <CTAButton active={true} linkto={card.BtnLink}>
                                                    {card.BtnText}
                                                </CTAButton>
                                            </div>
                                        </div>
                                    )
                                    : (<div className='flex flex-col gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-5 lg:p-7'>
                                        <h1 className='text-richblack-5 text-base sm:text-lg'>
                                            {card.heading}
                                        </h1>
                                        <p className='text-richblack-300 font-medium text-sm sm:text-base'>
                                            {card.description}
                                        </p>
                                    </div>)
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}

export default LearningGrid