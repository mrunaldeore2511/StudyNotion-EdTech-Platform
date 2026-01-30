import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { buyCourse } from "../../../../services/operations/studentFeaturesAPI"
import IconBtn from "../../../common/IconButton"

export default function RenderTotalAmount() {
    const { total, cart } = useSelector((state) => state.cart)
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBuyCourse = () => {
        const courses = cart.map((course) => course._id)
        buyCourse(token, courses, user, navigate, dispatch)
    }

    return (
        <div className="w-full sm:min-w-[280px] sm:max-w-[320px] lg:sticky lg:top-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-6">
            <p className="mb-1 text-xs sm:text-sm font-medium text-richblack-300">Total:</p>
            <p className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-medium text-yellow-100">₹ {total}</p>
            <div className="bg-yellow-50 text-richblack-900 rounded-lg p-2 sm:p-3 flex items-center justify-center">
                <IconBtn
                    text="Buy Now"
                    onClick={handleBuyCourse}
                    customClasses="w-full justify-center"
                />
            </div>

        </div>
    )
}