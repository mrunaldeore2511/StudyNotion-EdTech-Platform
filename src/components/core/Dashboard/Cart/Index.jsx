import { useSelector } from "react-redux"

import RenderCartCourses from "./RenderCartCourses"
import RenderTotalAmount from "./RenderTotalAmount"

export default function Index() {
    const { total, totalItems } = useSelector((state) => state.cart)

    return (
        <>
            <h1 className="mb-8 sm:mb-10 md:mb-14 text-2xl sm:text-3xl font-medium text-richblack-5">Cart</h1>
            <p className="border-b border-b-richblack-400 pb-2 text-sm sm:text-base font-semibold text-richblack-400">
                {totalItems} {totalItems === 1 ? 'Course' : 'Courses'} in Cart
            </p>
            {total > 0 ? (
                <div className="mt-6 sm:mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-4 sm:gap-y-6 lg:flex-row">
                    <RenderCartCourses />
                    <RenderTotalAmount />
                </div>
            ) : (
                <p className="mt-10 sm:mt-14 text-center text-xl sm:text-2xl md:text-3xl text-richblack-100">
                    Your cart is empty
                </p>
            )}
        </>
    )
}