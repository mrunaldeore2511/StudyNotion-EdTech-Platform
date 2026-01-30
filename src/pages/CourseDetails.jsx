import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { buyCourse } from '../services/operations/studentFeaturesAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCourseDetails } from '../services/operations/courseDetailsAPI';
import GetAvgRating from '../utils/avgRating';
import Error from './Error';
import ConfirmationModal from '../components/common/ConfirmationModal';
import RatingStars from '../components/common/RatingStars';
import { formatDate } from '../services/formatDate';
import { WiTime4 } from "react-icons/wi";
import CourseDetailsCard from '../components/core/Course/CourseDetailsCard';
import Footer from '../components/common/Footer';


const CourseDetails = () => {

    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const { loading } = useSelector((state) => state.profile);
    const { paymentLoading } = useSelector((state) => state.course);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { courseId } = useParams();
    const [confirmationModal, setConfirmationModal] = useState(null);
    const [isActive, setIsActive] = useState([]);
    const [courseData, setCourseData] = useState(null);

    const handleActive = (id) => {
        setIsActive(
            !isActive.includes(id) ? isActive.concat(id) : isActive.filter((e) => e != id)
        )
    }

    useEffect(() => {
        const getCourseFullDetails = async () => {
            try {
                const result = await fetchCourseDetails(courseId);
                setCourseData(result);

            }
            catch (err) {
                console.log("Could not fetch the course details")
            }
        }

        getCourseFullDetails();
        console.log("COURSE DATA:", courseData);

    }, [courseId])


    const [avgReviewCount, setAvgReviewCount] = useState(0);
    useEffect(() => {
        const count = GetAvgRating(courseData?.data?.courseDetails.ratingAndReviews);
        setAvgReviewCount(count);
    }, [courseData]);

    const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
    useEffect(() => {

        let lectures = 0;
        courseData?.data?.courseDetails?.courseContent?.forEach((sec) => {
            lectures += sec.subSection.length || 0;
        });

        setTotalNoOfLectures(lectures);
    }, [courseData])


    if (loading || !courseData) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!courseData.success) {
        return (
            <div>
                <Error />
            </div>
        )
    }

    const handleBuyCourse = () => {
        if (token) {
            buyCourse(token, [courseId], user, navigate, dispatch);
            return
        }

        setConfirmationModal({
            text1: "You are not logged in",
            text2: "Please log in to purchase the course",
            btn1Text: "Login",
            btn2Text: "Cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null),

        })
    }

    const {
        _id: course_id,
        courseName,
        courseDescription,
        thumbnail,
        price,
        whatYouWillLearn,
        courseContent,
        ratingAndReviews,
        instructor,
        studentsEnrolled,
        createdAt
    } = courseData.data?.courseDetails;



    return (
        <div className='text-richblack-5 flex flex-col items-center justify-center w-full'>

            <div className='relative w-full bg-richblack-800 px-36 py-20'>
                <p className='text-richblack-25 text-3xl font-semibold'>{courseName}</p>
                <p className='text-richblack-200  mt-4'>{courseDescription}</p>
                <div className='flex gap-x-2 items-center mt-4'>
                    <span className='text-yellow-50'>{avgReviewCount}</span>
                    <span><RatingStars Review_Count={avgReviewCount} Star_Size={24} /></span>
                    <span>{`(${ratingAndReviews.length} Reviews)`}</span>
                    <span>{`${studentsEnrolled.length} Students enrolled`}</span>
                </div>

                <div className=' mt-4'>
                    <p>Created By: {`${instructor.firstName}`}</p>
                </div>
                <div className='flex gap-x-3  mt-4'>
                    <p className='flex gap-x-1 items-center '> <WiTime4 /> Created At: {formatDate(createdAt)}</p>
                    <p>| English</p>
                </div>

                <div className='h-[100px]'>
                    <CourseDetailsCard
                        course={courseData?.data?.courseDetails}
                        setConfirmationModal={setConfirmationModal}
                        handleBuyCourse={handleBuyCourse}

                    />
                </div>
            </div>

            <div className='-translate-x-60 w-[45%] pr-6'>
                <div className='flex flex-col px-6 my-10 border-t border-l border-richblack-700 w-full gap-y-3'>
                    <p className='font-semibold text-3xl mb-4 mt-5'>What You Will Learn</p>
                    <div className='text-richblack-100'>
                        {whatYouWillLearn}
                    </div>
                </div>
            </div>

            <div className='-translate-x-60 w-[45%] pr-6 gap-y-2 mb-16'>
                <div className='flex flex-col px-6 my-10 w-full gap-y-3'>
                    <p className='font-semibold text-3xl'>Course Content</p>
                </div>
                <div className="px-6 flex justify-between items-center border-l border-richblack-700">
                    <div>
                        <span>
                            {courseContent.length} sections(s)
                        </span>
                        <span>
                            {" | " + totalNoOfLectures} lecture(s)
                        </span>
                        <span>
                            {" | " + courseData?.data?.totalDuration} Total Length
                        </span>
                    </div>
                    <button className='text-yellow-50 ' onClick={() => setIsActive([])}>
                        Collapse all sections
                    </button>
                </div>
            </div>

            <div className='-translate-x-60 w-[45%] pr-6'>
                <div className='flex flex-col px-6 my-10 w-full gap-y-3'>
                    <p className='text-richblack-25 text-3xl font-semibold'>Author</p>
                    <div className='w-14 rounded-full flex items-center gap-x-2'>
                        <img src={user?.image} alt="" className='rounded-full' />
                        <p>{user?.firstName}</p><p>{user?.lastName}</p>
                    </div>
                    <p className='px-2'>{user?.additionalDetails?.about}</p>
                </div>
            </div>



            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
            <Footer></Footer>
        </div>
    )
}

export default CourseDetails
