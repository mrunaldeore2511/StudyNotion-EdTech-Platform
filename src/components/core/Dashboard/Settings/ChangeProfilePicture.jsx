import { useEffect, useRef, useState } from "react"
import { FiUpload } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"

import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconButton"

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(null)

  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    // console.log(file)
    if (file) {
      setImageFile(file)
      previewFile(file)
    }
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleFileUpload = () => {
    try {
      console.log("uploading...")
      setLoading(true)
      const formData = new FormData()
      formData.append("displayPicture", imageFile)
      // console.log("formdata", formData)
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false)
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 sm:p-6 md:p-8 px-4 sm:px-6 md:px-12 text-richblack-5 gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-x-4 w-full sm:w-auto">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[64px] sm:w-[78px] rounded-full object-cover"
          />
          <div className="space-y-2 text-center sm:text-left w-full sm:w-auto">
            <p className="text-sm sm:text-base">Change Profile Picture</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
              <button
                onClick={handleClick}
                disabled={loading}
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-4 sm:px-5 font-semibold text-sm sm:text-base text-richblack-50 w-full sm:w-auto"
              >
                Select
              </button>
              <div className="bg-yellow-50 text-richblack-900 px-3 py-2 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                <IconBtn
                  text={loading ? "Uploading..." : "Upload"}
                  onClick={handleFileUpload}
                  customClasses="text-sm sm:text-base"
                >
                  {!loading && (
                    <FiUpload className="inline translate-x-1 text-base sm:text-lg text-richblack-900" />
                  )}
                </IconBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}