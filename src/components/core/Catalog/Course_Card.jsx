import React, { useEffect, useState } from "react"
// Icons
import { FaRegStar, FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"

import GetAvgRating from "../../../utils/avgRating"
import RatingStars from "../../common/RatingStars"

function Course_Card({ course, Height }) {
    // const avgReviewCount = GetAvgRating(course.ratingAndReviews)
    // console.log(course.ratingAndReviews)
    const [avgReviewCount, setAvgReviewCount] = useState(0)
    useEffect(() => {
        const count = GetAvgRating(course.ratingAndReviews)
        setAvgReviewCount(count)
    }, [course])
    // console.log("count............", avgReviewCount)

    return (
        <>
            <Link to={`/courses/${course._id}`}>
                <div className="">
                    <div className="rounded-lg">
                        <img
                            src={course?.thumbnail}
                            alt="course thumnail"
                            className={`${Height} w-full rounded-xl object-cover`}
                        />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2 px-1 py-2 sm:py-3">
                        <p className="text-base sm:text-lg lg:text-xl text-richblack-5 line-clamp-2">{course?.courseName}</p>
                        <p className="text-xs sm:text-sm text-richblack-50">
                            {course?.instructor?.firstName} {course?.instructor?.lastName}
                        </p>
                        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                            <span className="text-yellow-5 text-sm sm:text-base">{avgReviewCount || 0}</span>
                            {/* <ReactStars
                count={5}
                value={avgReviewCount || 0}
                size={20}
                edit={false}
                activeColor="#ffd700"
                emptyIcon={<FaRegStar />}
                fullIcon={<FaStar />}
              /> */}
                            <RatingStars Review_Count={avgReviewCount} />
                            <span className="text-richblack-400 text-xs sm:text-sm">
                                {course?.ratingAndReviews?.length} Ratings
                            </span>
                        </div>
                        <p className="text-base sm:text-lg lg:text-xl text-richblack-5">Rs. {course?.price} /-</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Course_Card