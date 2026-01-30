import React from 'react'

const StatsComponent = () => {
    const Stats = [
        { count: "5K", label: "Active Students" },
        { count: "10+", label: "Mentors" },
        { count: "200+", label: "Courses" },
        { count: "50+", label: "Awards" }



    ]
    return (
        <section>
            <div className='mt-10 bg-richblack-800 p-6 sm:p-10 lg:p-20'>
                <div className='flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-44 text-richblack-5'>
                    {
                        Stats.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-2 sm:gap-3 items-center'>
                                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>{data.count}</h1>
                                    <h2 className='text-richblack-300 font-semibold text-sm sm:text-base'>{data.label}</h2>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default StatsComponent