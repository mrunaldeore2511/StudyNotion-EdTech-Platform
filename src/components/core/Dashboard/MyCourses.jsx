import React from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';
import IconBtn from '../../common/IconButton';
import { LuPlus } from "react-icons/lu";
import { useEffect } from 'react';
import CoursesTable from './InstructorCourses/CoursesTable';


const MyCourses = () => {

    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const result = await fetchInstructorCourses(token);
            if (result) {
                setCourses(result);
            }
        }
        fetchCourses();

    }, [])

    return (
        <div>
            <div className='flex items-center justify-center gap-[650px]'>
                <h1 className='text-3xl text-richblack-5 font-semibold'>My Courses</h1>
                <div className='flex items-center justify-center bg-yellow-50 text-richblack-900 rounded-lg p-2'>
                    <IconBtn
                        text={"Add Course "}
                        onClick={() => navigate("/dashboard/add-course")}
                    />
                    <LuPlus />
                </div>


            </div>
            {
                courses && <CoursesTable courses={courses} setCourses={setCourses} />
            }
        </div>
    )
}

export default MyCourses
