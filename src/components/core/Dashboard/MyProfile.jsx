import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../common/IconButton"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="w-full mb-8 sm:mb-10 md:mb-14 text-2xl sm:text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-6 md:p-8 px-4 sm:px-6 md:px-12 gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-x-4 w-full sm:w-auto">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[64px] sm:w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-base sm:text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-xs sm:text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <div className="flex bg-yellow-50 justify-center items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg w-full sm:w-auto">
          <IconBtn
            text="Edit"
            onClick={() => {
              navigate("/dashboard/settings")
            }}
            customClasses="text-sm sm:text-base"
          />
          <RiEditBoxLine className="text-base sm:text-lg" />
        </div>
      </div>
      <div className="my-6 sm:my-8 md:my-10 flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-6 md:p-8 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-3 sm:gap-0">
          <p className="text-base sm:text-lg font-semibold text-richblack-5">About</p>
          <div className="flex bg-yellow-50 justify-center items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg w-full sm:w-auto">
            <IconBtn
              text="Edit"
              onClick={() => {
                navigate("/dashboard/settings")
              }}
              customClasses="text-sm sm:text-base"
            />
            <RiEditBoxLine className="text-base sm:text-lg" />
          </div>
        </div>
        <p
          className={`${user?.additionalDetails?.about
            ? "text-richblack-5"
            : "text-richblack-400"
            } text-xs sm:text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-6 sm:my-8 md:my-10 flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-6 md:p-8 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-3 sm:gap-0">
          <p className="text-base sm:text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <div className="flex bg-yellow-50 justify-center items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-lg w-full sm:w-auto">
            <IconBtn
              text="Edit"
              onClick={() => {
                navigate("/dashboard/settings")
              }}
              customClasses="text-sm sm:text-base"
            />
            <RiEditBoxLine className="text-base sm:text-lg" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row max-w-full sm:max-w-[500px] justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-y-4 sm:gap-y-5 flex-1">
            <div>
              <p className="mb-2 text-xs sm:text-sm text-richblack-600">First Name</p>
              <p className="text-xs sm:text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs sm:text-sm text-richblack-600">Email</p>
              <p className="text-xs sm:text-sm font-medium text-richblack-5 break-words">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs sm:text-sm text-richblack-600">Gender</p>
              <p className="text-xs sm:text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-5 flex-1">
            <div>
              <p className="mb-2 text-xs sm:text-sm text-richblack-600">Last Name</p>
              <p className="text-xs sm:text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs sm:text-sm text-richblack-600">Phone Number</p>
              <p className="text-xs sm:text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs sm:text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-xs sm:text-sm font-medium text-richblack-5">
                {/* {formattedDate(user?.additionalDetails?.dateOfBirth) ?? */}
                {/* "Add Date Of Birth"} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}