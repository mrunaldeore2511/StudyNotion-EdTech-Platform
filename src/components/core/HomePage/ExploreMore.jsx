import React from 'react'
import { HomePageExplore } from "../../../data/homepage-explore"
import { useState } from 'react'
import HighlightText from "./HighlightText"
import CourseCard from "./CourseCard"

const tabsName = [
    "Free",
    "New To Coding",
    "Most Popular",
    "Skill Paths",
    "Career Paths"
]

const ExploreMore = () => {

    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);

        const result = HomePageExplore.find(
            (course) => course.tag === value
        );

        setCourses(result.courses);
        setCurrentCard(result.courses[0].heading);
    };

    return (
        <div className="relative">
            <div className='font-semibold text-3xl md:text-4xl text-center'>
                Unlock the <HighlightText text={"Power of Code"} />
            </div>

            <p className='text-center text-richblack-300 text-sm md:text-base mt-3'>
                Learn to build anything you can imagine
            </p>

            {/* Tabs */}
            <div className='mt-5 px-1 py-1 flex flex-wrap justify-center gap-2 mb-5 bg-richblack-800 rounded-full'>
                {
                    tabsName.map((element, index) => {
                        return (
                            <div
                                className={`text-[14px] md:text-[16px] flex items-center gap-2
                                ${currentTab === element
                                        ? "bg-richblack-900 text-richblack-5 font-medium rounded-full transition-all duration-200 cursor-pointer px-4 md:px-5 py-2"
                                        : "text-richblack-100 rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-4 md:px-5 py-2"
                                    }`}
                                key={index}
                                onClick={() => setMyCards(element)}
                            >
                                {element}
                            </div>
                        )
                    })
                }
            </div>

            <div className="h-[80px] md:h-[150px]"></div>

            {/* Course Cards */}
            <div className="absolute flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 justify-center md:justify-between w-full px-4">
                {
                    courses.map((element, index) => {
                        return (
                            <CourseCard
                                key={index}
                                cardData={element}
                                currentCard={currentCard}
                                setCurrentCard={setCurrentCard}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExploreMore
