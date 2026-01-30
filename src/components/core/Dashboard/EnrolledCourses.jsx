import { useEffect, useState } from "react"
import ProgressBar from "@ramonak/react-progress-bar"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getUserEnrolledCourses } from "../../../services/operations/profileAPI"

export default function EnrolledCourses() {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const [enrolledCourses, setEnrolledCourses] = useState(null)

    useEffect(() => {
        ; (async () => {
            try {
                const res = await getUserEnrolledCourses(token) // Getting all the published and the drafted courses

                // Filtering the published course out
                const filterPublishCourse = res.filter((ele) => ele.status !== "Draft")
                // console.log(
                //   "Viewing all the couse that is Published",
                //   filterPublishCourse
                // )

                setEnrolledCourses(filterPublishCourse)
            } catch (error) {
                console.log("Could not fetch enrolled courses.")
            }
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="text-2xl sm:text-3xl text-richblack-50 mb-4 sm:mb-6">Enrolled Courses</div>
            {!enrolledCourses ? (
                <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                    <div className="spinner"></div>
                </div>
            ) : !enrolledCourses.length ? (
                <p className="grid h-[10vh] w-full place-content-center text-sm sm:text-base text-richblack-5 px-4 text-center">
                    You have not enrolled in any course yet.
                    {/* TODO: Modify this Empty State */}
                </p>
            ) : (
                <div className="my-6 sm:my-8 text-richblack-5">
                    {/* Headings - Hidden on mobile */}
                    <div className="hidden md:flex rounded-t-lg bg-richblack-500">
                        <p className="w-[45%] px-5 py-3 text-sm">Course Name</p>
                        <p className="w-1/4 px-2 py-3 text-sm">Duration</p>
                        <p className="flex-1 px-2 py-3 text-sm">Progress</p>
                    </div>
                    {/* Course Names */}
                    {enrolledCourses.map((course, i, arr) => (
                        <div
                            className={`flex flex-col md:flex-row md:items-center border border-richblack-700 ${i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
                                } ${i === 0 ? "md:rounded-t-none rounded-t-lg" : ""}`}
                            key={i}
                        >
                            <div
                                className="flex w-full md:w-[45%] cursor-pointer items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4"
                                onClick={() => {
                                    navigate(
                                        `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                                    )
                                    console.log("COURSE", course)
                                    console.log("SECTION ID", course.courseContent?.[0]?._id)
                                    console.log("SUBSECTION ID", course.courseContent?.[0]?.subSection?.[0]?._id)
                                }}
                            >
                                <img
                                    src={course.thumbnail}
                                    alt="course_img"
                                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg object-cover flex-shrink-0"
                                />
                                <div className="flex max-w-xs flex-col gap-1 sm:gap-2">
                                    <p className="font-semibold text-sm sm:text-base line-clamp-2">{course.courseName}</p>
                                    <p className="text-xs text-richblack-300 line-clamp-2">
                                        {course.courseDescription.length > 50
                                            ? `${course.courseDescription.slice(0, 50)}...`
                                            : course.courseDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Duration and Progress - Stacked on mobile */}
                            <div className="flex md:contents w-full md:w-auto px-4 sm:px-5 md:px-0 pb-3 md:pb-0 gap-4 md:gap-0">
                                <div className="flex-1 md:w-1/4 md:px-2 md:py-3">
                                    <p className="text-xs md:hidden text-richblack-400 mb-1">Duration</p>
                                    <p className="text-sm">{course?.totalDuration}</p>
                                </div>
                                <div className="flex-1 md:flex-1 md:w-1/5 flex flex-col gap-1 sm:gap-2 md:px-2 md:py-3">
                                    <p className="text-xs md:text-sm">
                                        <span className="md:hidden text-richblack-400">Progress: </span>
                                        <span className="hidden md:inline">Progress: </span>
                                        {course.progressPercentage || 0}%
                                    </p>
                                    <ProgressBar
                                        completed={course.progressPercentage || 0}
                                        height="8px"
                                        isLabelVisible={false}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}