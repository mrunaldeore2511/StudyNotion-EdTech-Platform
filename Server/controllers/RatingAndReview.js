const RatingAndReviews = require("../models/RatingandReviews");
const Course = require("../models/Course");
const User = require("../models/User");
const { trusted } = require("mongoose");

exports.createRating = async(req, res) => {

    try{
        //get data ->  user id and req body
        const userId = req.user.id;
        const{rating, review, courseId} = req.body;
        //validate
        //check if user enrolled in course
        const courseDetails = await Course.findById(courseId);
        if(!courseDetails.studentsEnrolled.some(id => id.equals(userId))){
            return res.status(402).json({
                success: false,
                message: `Student is not enrolled in course`,
            })
        }

        if(!courseDetails){
            return res.status(402).json({
                success: false,
                message: `CourseDetails not fetched`,
            })
        };
        //check already not reviewed course
        const alreadyReviewed = await RatingAndReviews.findOne({user:userId,course:courseId});
        if(alreadyReviewed){
            return res.status(404).json({
                success:false,
                message: "User already reviewed the course",
            })
        }
        //create rating review
        const ratingReviews = await RatingAndReviews.create({rating, review, course:courseId, user: userId});
        //update the course
        const updatedCourseDetails = await Course.findByIdAndUpdate(courseId, {$push:{ratingAndReviews: ratingReviews._id}}, {new:true});
        console.log("updatedCourseDetails in Rating and Review: ", updatedCourseDetails);
        //return res
        return res.status(200).json({
            success: true,
            message: `Rating and Review created successfully`,
            ratingReviews
        })
    }
    catch(err){
        return res.status(402).json({
            success: false,
            message: `Cannot create rating`,
            error: err.message
        })
    }
}

//get Average rating
exports.getAverageRating = async(req, res) => {
    try{
        const courseId = req.body.courseId;
        const result = await RatingAndReviews.aggregate([{
            $match:{
                course: new mongoose.Types.ObjectId(courseId)
            }},
            {
                $group: {
                    _id:null,
                    averageRating: {$avg: "$rating"}
                }
            }
        ]);

        if(result.length > 0){
            return res.status(200).json({
                success:true,
                message: "Average rating calculated",
                averageRating: result[0].averageRating
            })
        };

        return res.status(200).json({
            success: true,
            message: "Average rating is 0, given till now",
            averageRating: 0
        })
    }
    catch(err){
        return res.status(402).json({
            success: false,
            message: `Cannot fetch average rating`,
            error: err.message
        })   
    }
}

//get all rating
exports.getAllRatingReview = async(req, res) => {

    try{    
        const allRatingReviews = await RatingAndReviews.find({}).sort({rating:-1})
                                                        .populate({
                                                            path:"user",
                                                            select: "firstName lastName image email"
                                                        })
                                                        .populate({
                                                            path: "course",
                                                            select: "courseName"
                                                        }).exec();

        return res.status(200).json({
            success: true,
            message: "All rating and Reviews fetched successfully",
            data: allRatingReviews
        })
    }
    catch(err){
        return res.status(402).json({
            success: false,
            message: `Cannot fetch all average rating`,
            error: err.message
        })  
    }
}

//HW: get Course Specific rating and review