import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router'
import { apiConnector } from '../services/apiConnector';
import { categories } from '../services/apis';
import { getCatalogPageData } from '../services/pageAndComponentData';
import CourseSlider from "../components/core/Catalog/CourseSlider"
import Course_Card from "../components/core/Catalog/Course_Card"


const Catalog = () => {


    const { catalogName } = useParams();
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");

    //Fetch all categories
    useEffect(() => {
        const getCategories = async () => {
            const res = await apiConnector("GET", categories.CATEGORIES_API);
            const category_id =
                res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
            setCategoryId(category_id);
        }
        getCategories();
    }, [catalogName]);

    useEffect(() => {
        const getCategoryDetails = async () => {
            try {
                const res = await getCatalogPageData(categoryId);
                console.log("PRinting res: ", res);
                setCatalogPageData(res);
            }
            catch (error) {
                console.log(error)
            }
        }
        if (categoryId) {
            getCategoryDetails();
        }

    }, [categoryId]);


    return (
        <div className='text-richblack-5 flex items-center justify-center flex-col'>

            {/* HERO */}
            <div className='w-full bg-richblack-700 
        px-4 sm:px-6 md:px-12 lg:px-24 
        py-10 sm:py-14 md:py-20'>

                <p className='text-richblack-5 mb-4 text-sm sm:text-base'>
                    {`Home / Catalog / `}
                    <span className='text-yellow-50'>
                        {catalogPageData?.data?.selectedCategory?.name}
                    </span>
                </p>

                <p className='text-2xl sm:text-3xl md:text-4xl mb-4'>
                    {catalogPageData?.data?.selectedCategory?.name}
                </p>

                <p className='text-richblack-200 text-sm sm:text-base max-w-4xl'>
                    {catalogPageData?.data?.selectedCategory?.description}
                </p>
            </div>

            <div className='w-full max-w-7xl px-4 sm:px-6 md:px-8'>

                {/* section 1 */}
                <div className='mt-10 p-2 sm:p-3'>
                    <div className='text-2xl sm:text-3xl text-richblack-5 font-semibold mb-4 sm:mb-6'>
                        Courses to get you started
                    </div>

                    <div className='flex gap-x-4 text-sm sm:text-base'>
                        <p>Most Popular</p>
                        <p>New</p>
                    </div>

                    <div className='mt-5'>
                        <CourseSlider
                            Courses={catalogPageData?.data?.selectedCategory?.courses}
                        />
                    </div>
                </div>

                {/* section 2 */}
                <div className='mb-10 mt-12'>
                    <div className='text-2xl sm:text-3xl text-richblack-5 font-semibold mb-6'>
                        Top courses in {catalogPageData?.data?.selectedCategory?.name}
                    </div>

                    <CourseSlider
                        Courses={catalogPageData?.data?.differentCategory?.courses}
                    />
                </div>

                {/* section 3 */}
                <div>
                    <div className='text-2xl sm:text-3xl text-richblack-5 font-semibold mb-6'>
                        Frequently Bought
                    </div>

                    <div className='py-6 sm:py-8'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-10'>
                            {
                                catalogPageData?.data?.mostSellingCourses
                                    ?.slice(0, 4)
                                    .map((course, index) => (
                                        <Course_Card
                                            course={course}
                                            key={index}
                                            Height={"h-[300px]"}
                                        />
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}

export default Catalog
