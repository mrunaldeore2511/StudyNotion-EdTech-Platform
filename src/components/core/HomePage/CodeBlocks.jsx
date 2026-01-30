import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({ position, heading, subheading, ctabtn1, ctabtn2, codeblock, codeColour }) => {
    return (
        <div
            className={`flex flex-col lg:flex-row ${position} my-12 lg:my-20 justify-between gap-10 w-full px-4 md:px-10 lg:px-14 mx-0 lg:mx-11`}
        >
            {/* Section 1 */}
            <div className="w-full lg:w-[500px] gap-4">
                <div className="flex flex-col gap-6 lg:gap-8">
                    {heading}
                    <div className="text-richblack-300 font-bold">{subheading}</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-7">
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className="flex gap-2 items-center">
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div>

            {/* Section 2 */}
            <div className="text-center flex w-full max-w-[350px] lg:w-[350px] gap-2 border border-richblack-600 mx-auto lg:mx-0">
                <div className="text-center flex flex-col w-[15%] lg:w-[10%] border text-richblack-400 font-inter font-bold border-richblack-600">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>

                <div className="w-[85%] lg:w-[70%] flex flex-col gap-2 font-semibold font-mono text-yellow-50 pr-4 lg:pr-6 pl-3 my-1">
                    <TypeAnimation
                        className="text-left text-sm md:text-base"
                        sequence={[codeblock, 2000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        omitDeletionAnimation={true}
                    />
                </div>
            </div >
        </div>
    )
}

export default CodeBlocks
