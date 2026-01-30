const express = require("express");
const app = express();
require("dotenv").config();

const userRoutes = require('./routes/User');
const profileRoutes = require('./routes/Profile');
const paymentRoute = require('./routes/Payments');
const courseRoute = require('./routes/Course');
const {cloudinaryConnect} = require("./config/cloudinary");


const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

// const dotenv = require("dotenv");
// dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: "http://localhost:3000", credentials:true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:"/tmp"
}))
cloudinaryConnect();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/course", courseRoute);


app.get("/" ,(req, res) => {
    return res.json({
        success: true,
        message: "Server is up and running"
    })
})

app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`);
})