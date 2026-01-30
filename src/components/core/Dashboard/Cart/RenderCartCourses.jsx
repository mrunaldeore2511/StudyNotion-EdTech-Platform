import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux"

import { removeFromCart } from "../../../../slices/cartSlice"

export default function RenderCartCourses() {
    const { cart } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <div className="flex flex-1 flex-col w-full">
            {cart.map((course, indx) => (
                <div
                    key={course._id}
                    className={`flex w-full flex-col sm:flex-row flex-wrap items-start justify-between gap-4 sm:gap-6 ${indx !== cart.length - 1 && "border-b border-b-richblack-400 pb-4 sm:pb-6"
                        } ${indx !== 0 && "mt-4 sm:mt-6"} `}
                >
                    <div className="flex flex-1 flex-col sm:flex-col xl:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                        <img
                            src={course?.thumbnail}
                            alt={course?.courseName}
                            className="h-[120px] w-full sm:h-[148px] sm:w-[220px] rounded-lg object-cover"
                        />
                        <div className="flex flex-col space-y-1 sm:space-y-2">
                            <p className="text-base sm:text-lg font-medium text-richblack-5">
                                {course?.courseName}
                            </p>
                            <p className="text-xs sm:text-sm text-richblack-300">
                                {course?.category?.name}
                            </p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm sm:text-base text-yellow-5">4.5</span>
                                <ReactStars
                                    count={5}
                                    value={course?.ratingAndReviews?.length}
                                    size={18}
                                    edit={false}
                                    activeColor="#ffd700"
                                    emptyIcon={<FaStar />}
                                    fullIcon={<FaStar />}
                                />
                                <span className="text-xs sm:text-sm text-richblack-400">
                                    {course?.ratingAndReviews?.length} Ratings
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto space-y-0 sm:space-y-2">
                        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-yellow-100 order-1 sm:order-2">
                            ₹ {course?.price}
                        </p>
                        <button
                            onClick={() => dispatch(removeFromCart(course._id))}
                            className="flex items-center gap-x-1 sm:gap-x-2 rounded-md border border-richblack-600 bg-richblack-700 py-2 sm:py-3 px-3 sm:px-[12px] text-xs sm:text-sm text-pink-200 order-2 sm:order-1"
                        >
                            <RiDeleteBin6Line className="text-base sm:text-lg" />
                            <span>Remove</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}