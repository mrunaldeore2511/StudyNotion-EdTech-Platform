import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"
import HighlightText from "../components/core/HomePage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from "../components/core/HomePage/ExploreMore"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CourseCard from "../components/core/HomePage/CourseCard"

const Home = () => {
    return (
        <div className='relative mx-auto flex flex-col w-full items-center justify-center text-white'>
            {/* Section 1 */}
            <div className='relative flex flex-col items-center justify-center w-full text-white'>

                {/* Section 1 */}
                <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
                    <Link to="/signup">
                        <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-transform duration-200 hover:scale-95 w-fit">
                            <div className="flex items-center gap-2 px-6 py-2 rounded-full group-hover:bg-richblack-900">
                                <p>Become an Instructor</p>
                                <FaArrowRight />
                            </div>
                        </div>
                    </Link>

                    <h1 className="text-center mt-8 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                        Empower Your Future with <HighlightText text="Coding Skills" />
                    </h1>

                    <p className="mt-4 text-center text-sm sm:text-base text-richblack-300 max-w-3xl">
                        With our online coding courses, you can learn at your own pace, from anywhere, and access hands-on projects, quizzes, and personalized instructor feedback.
                    </p>

                    <div className='flex flex-wrap justify-center gap-4 mt-6'>
                        <CTAButton active linkto="/signup">Learn More</CTAButton>
                        <CTAButton linkto="/login">Book a Demo</CTAButton>
                    </div>

                    <div className="flex justify-center w-full my-12">
                        <video className="w-full max-w-4xl h-auto rounded-lg" muted loop autoPlay>
                            <source src={Banner} type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Code Section 1 */}
                <CodeBlocks
                    position={"lg-flex-row"}
                    heading={
                        <div className='text-4xl font-semi-bold'>
                            Unlock your
                            <HighlightText text={" coding potential "} ></HighlightText>
                            with our online courses.
                        </div>
                    }

                    subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}

                    ctabtn1={{
                        btnText: "Try it Yourself",
                        linkto: "/signup",
                        active: true
                    }}

                    ctabtn2={{
                        btnText: "Learn More",
                        linkto: "/login",
                        active: false
                    }}

                    codeblock={`<!DOCTYPE html>
                                <html>
                                head><title>Example</
                                title><linkrel="stylesheet"href="styles.css">
                                /head>
                                body>
                                h1><ahref="/">Header</a>
                                /h1>
                                nav><ahref="one/">One</a><ahref="two/">Two</
                                a><ahref="three/">Three</a>
                                /nav>`}
                />
                {/* Code section 2 */}

                <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className='text-4xl font-semi-bold'>
                            Start
                            <HighlightText text={" coding in seconds "}> </HighlightText>
                        </div>
                    }

                    subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}

                    ctabtn1={{
                        btnText: "Continue Lesson",
                        linkto: "/login",
                        active: true
                    }}

                    ctabtn2={{
                        btnText: "Learn More",
                        linkto: "/signup",
                        active: false
                    }}

                    codeblock={`<!DOCTYPE html>
                                <html>
                                head><title>Example</
                                title><linkrel="stylesheet"href="styles.css">
                                /head>
                                body>
                                h1><ahref="/">Header</a>
                                /h1>
                                nav><ahref="one/">One</a><ahref="two/">Two</
                                a><ahref="three/">Three</a>
                                /nav>`}
                />

                <ExploreMore />

            </div>





            {/* Section 2 */}
            <div className="bg-pure-greys-5 text-richblack-700 w-full">
                <div className="homepage_bg h-[333px] w-full">
                    <div className="w-11/12 max-w-maxContent flex flex-col gap-5 justify-center">
                        <CourseCard></CourseCard>

                        <div className="flex gap-7 text-white justify-center mt-40 pl-16">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-3">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>

                            <CTAButton active={false} linkto={"/signup"}>Learn More</CTAButton>
                        </div>
                    </div>
                </div>


                <div className="w-11/12 mx-auto max-w-maxContent flex flex-col justify-between mb-10">
                    <div className="flex flex-gap gap-10 mt-[100px] justify-center">

                        <div className="font-semibold font-inter text-4xl text-black w-[45%]">
                            Get the skills you need for a <HighlightText text={"job that is in demand"} />.
                        </div>

                        <div className='flex flex-col w-[40%] gap-10 items-start'>
                            <p className="text-[16px]">
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </p>
                            <CTAButton active={true} linkto={"signup"}> <div>Learn More</div> </CTAButton>
                        </div>
                    </div>
                    <TimeLineSection />
                    <LearningLanguageSection />
                </div>

            </div>



            {/* section 3 */}
            <div className='w-f mx-auto max-w-maxContent flex items-center flex-col justify-between gap-8 bg-richblack-900 text-white'>

                <InstructorSection />
                <h2 className="text-center  text-4xl font-semibold mt-10">Reviews from Other Learner</h2>
                {/* Review Slider */}
                <ReviewSlider />
            </div>

            <Footer />
        </div >

    )

}

export default Home
