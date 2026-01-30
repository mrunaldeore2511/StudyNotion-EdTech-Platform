import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import TimeLineImage from "../../../assets/Images/TimelineImage.png"

const timeLine = [
    {
        Logo: Logo1,
        Heading: "Leadership",
        Description: "Fully committed to the success company"
    },
    {
        Logo: Logo2,
        Heading: "Responsibility",
        Description: "Students will always be our top priority"
    },
    {
        Logo: Logo3,
        Heading: "Flexibility",
        Description: "The ability to switch is an important skills"
    },
    {
        Logo: Logo4,
        Heading: "Solve the problem",
        Description: "Code your way to a solution"
    },
]

const TimeLineSection = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-10 mt-10 justify-center relative'>
                <div className='flex flex-col gap-5 w-full lg:w-[45%] mt-6 px-6 lg:pl-16 gap-y-10 text-sm'>
                    {timeLine.map((element, index) => {
                        return (
                            <div key={index} className="flex gap-6">
                                <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
                                    <img src={element.Logo} />
                                </div>

                                <div>
                                    <h2 className="font-semibold text-[18px]">{element.Heading}</h2>
                                    <p className='text-[14px]'>{element.Description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='relative shadow-blue-200 w-full lg:w-[60%] flex justify-center'>
                    <img
                        src={TimeLineImage}
                        alt=""
                        className='shadow-white object-cover w-full max-w-[320px] md:max-w-[500px] lg:w-[600px] h-auto lg:h-[450px]'
                    />
                </div>

                <div className="absolute bg-caribbeangreen-700 flex flex-col md:flex-row text-white uppercase py-6 md:py-8 items-center justify-center w-full md:w-[450px] mt-6 lg:mt-0 md:translate-x-0 md:translate-y-0 lg:absolute lg:translate-x-[63%] lg:translate-y-[380%]">
                    <div className="flex gap-5 items-center md:border-r border-caribbeangreen-300 px-7 w-full md:w-[40%] justify-center">
                        <p className="text-3xl font-bold">10</p>
                        <p className="text-caribbeangreen-300 text-sm">Years of Experience</p>
                    </div>

                    <div className="flex gap-5 items-center px-7 w-full md:w-[40%] justify-center">
                        <p className="text-3xl font-bold">250</p>
                        <p className="text-caribbeangreen-300 text-sm">Type of Courses</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TimeLineSection
