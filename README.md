# StudyNotion - EdTech Platform

:rocket: [Link to website][https://studynotion-frontend.vercel.app/]

![Main Page](images/mainpage.png)

StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

## Table of Contents

- [Introduction](#introduction)
- [System Architecture](#system-architecture)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
  - [Database](#database)
  - [Architecture Diagram](#architecture-diagram)
- [API Design](#api-design)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Project Description

StudyNotion is a fully functional ed-tech platform that enables users to create, consume,
and rate educational content. The platform is built using the MERN stack, which includes
ReactJS, NodeJS, MongoDB, and ExpressJS.
StudyNotion aims to provide:

- A seamless and interactive learning experience for students, making education
  more accessible and engaging.
- A platform for instructors to showcase their expertise and connect with learners
  across the globe.
  In the following sections, we will cover the technical details of the platform, including:

1. System architecture: The high-level overview of the platform's components and
   diagrams of the architecture.
2. Front-end: The description of the front-end architecture, user interface design,
   features, and functionalities of the front-end, and frameworks, libraries, and tools
   used.
3. Back-end: The description of the back-end architecture, features and functionalities of
   the back-end, frameworks, libraries, tools used, and data models and database schema.
4. API Design: The description of the API design, list of API endpoints, their
   functionalities, and sample API requests and responses.
5. Deployment: The description of the deployment process, hosting environment and
   infrastructure, and deployment scripts and configuration.
6. Testing: The description of the testing process, types of testing, test frameworks and
   tools used.
7. Future Enhancements: The list of potential future enhancements to the platform,
   explanation of how these enhancements would improve the platform, estimated
   timeline and priority for implementing these enhancements.
   In summary, StudyNotion is a versatile and intuitive ed-tech platform that is designed to
   provide an immersive learning experience to students and a platform for instructors to
   showcase their expertise. In the following sections, we will delve into the technical details
   of the platform, which will provide a comprehensive understanding of the platform's
   features and functionalities.

## Introduction

StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform serves as a platform for instructors to showcase their expertise and connect with learners across the globe.
In the following sections, we will cover the technical details of the platform, including the system architecture, API design, installation, usage instructions, and potential future enhancements.

## System Architecture

The StudyNotion ed-tech platform consists of three main components: the front end, the
back end, and the database. The platform follows a client-server architecture, with the
front end serving as the client and the back end and database serving as the server.
The StudyNotion EdTech platform consists of three main components: the front-end, the back-end, and the database. The platform follows a client-server architecture, with the front-end serving as the client and the back-end and database serving as the server.

### Front-end

The front-end of the platform is built using ReactJS, which allows for the creation of dynamic and responsive user interfaces, crucial for providing an engaging learning experience to students. The front-end communicates with the back-end using RESTful API calls.

#### Front End Pages

For Students:

- **Homepage:** A brief introduction to the platform with links to the course list and user details.
- **Course List:** A list of all the courses available on the platform, along with their descriptions and ratings.
- **Wishlist:** Displays all the courses that a student has added to their wishlist.
- **Cart Checkout:** Allows the user to complete course purchases.
- **Course Content:** Presents the course content for a particular course, including videos and related material.
- **User Details:** Provides details about the student's account, including their name, email, and other relevant information.
- **User Edit Details:** Allows students to edit their account details.
  For Instructors:
- **Dashboard:** Offers an overview of the instructor's courses, along with ratings and feedback for each course.
- **Insights:** Provides detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
- **Course Management Pages:** Enables instructors to create, update, and delete courses, as well as manage course content and pricing.
- **View and Edit Profile Details:** Allows instructors to view and edit their account details.

#### Front-end Tools and Libraries

To build the front-end, we use frameworks and libraries such as ReactJS, CSS, and Tailwind for styling, and Redux for state management.

### Back-end

### Front-end

The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

The front end of the platform is built using ReactJS, ReactJS allows for the creation of dynamic and responsive user
interfaces, which are critical for providing an engaging learning experience to the students.
The front end communicates with the back end using RESTful API calls

#### Back-end Features

### Back-end

- **User Authentication and Authorization:** Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
- **Course Management:** Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
- **Payment Integration:** Students will purchase and enroll in courses by completing the checkout flow, followed by Razorpay integration for payment handling.
- **Cloud-based Media Management:** StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
- **Markdown Formatting:** Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.

The back end of the platform is built using NodeJS and ExpressJS,. The back end
provides APIs for the front end to consume, which include functionalities such as user
authentication, course creation, and course consumption. The back end also handles the
logic for processing and storing the course content and user data.

#### Back-end Frameworks, Libraries, and Tools

The back-end of StudyNotion uses various frameworks, libraries, and tools to ensure its functionality and performance, including:

- **Node.js:** Used as the primary framework for the back-end.
- **Express.js:** Used as a web application framework, providing a range of features and tools for building web applications.
- **MongoDB:** Used as the primary database, providing a flexible and scalable data storage solution.
- **JWT (JSON Web Tokens):** Used for authentication and authorization, providing a secure and reliable way to manage user credentials.
- **Bcrypt:** Used for password hashing, adding an extra layer of security to user data.
- **Mongoose:** Used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.

#### Data Models and Database Schema

The back-end of StudyNotion uses several data models and database schemas to manage data, including:

- **Student Schema:** Includes fields such as name, email, password, and course details for each student.
- **Instructor Schema:** Includes fields such as name, email, password, and course details for each instructor.
- **Course Schema:** Includes fields such as course name, description, instructor details, and media content.

### Database

The database for the platform is built using MongoDB, which is a NoSQL database that
provides a flexible and scalable data storage solution. MongoDB allows for the storage of
unstructured and semi-structured data. The database stores the course content, user data, and other
relevant information related to the platform.
The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.

![Database Schema](images/schema.png)

### Architecture Diagram

Here is a high-level diagram that illustrates the architecture of the StudyNotion ed-tech
platform:
Below is a high-level diagram that illustrates the architecture of the StudyNotion EdTech platform:

![Architecture](images/architecture.png)

## Front End

The front end of StudyNotion has all the necessary pages that an ed-tech platform should
have. Some of these pages are:

### For Students:

- Homepage: This page will have a brief introduction to the platform, as well as links
  to the course list and user details.
- Course List: This page will have a list of all the courses available on the platform,
  along with their descriptions and ratings.
- Wishlist: This page will display all the courses that a student has added to their
  wishlist.
- Cart Checkout: This page will allow the user to complete the course purchase.
- Course Content: This page will have the course content for a particular course,
  including videos, and other related material.
- User Details: This page will have details about the student's account, including
  their name, email, and other relevant information.
- User Edit Details: This page will allow the student to edit their account details.

### For Instructors:

- Dashboard: This page will have an overview of the instructor's courses, as well as
  the ratings and feedback for each course.
- Insights: This page will have detailed insights into the instructor's courses,
  including the number of views, clicks, and other relevant metrics.
- Course Management Pages: These pages will allow the instructor to create, update,
  and delete courses, as well as manage the course content and pricing.
- View and Edit Profile Details: These pages will allow the instructor to view and edit
  their account details.
  PAGE 3
  For Admin (this is for future scope):
- Dashboard: This page will have an overview of the platform's courses, instructors,
  and students.
- Insights: This page will have detailed insights into the platform's metrics, including
  the number of registered users, courses, and revenue.
- Instructor Management: This page will allow the admin to manage the platform's
  instructors, including their account details, courses, and ratings.
- Other Relevant Pages: The admin will also have access to other relevant pages, such
  as user management and course management pages.
  To build the front end, we use frameworks and libraries such as ReactJS, We also use CSS and Tailwind, which are
  styling frameworks that help make the user interface look good and responsive.
  To manage the state of the application, we use Redux, which is a popular state management
  library for React.

## Back End

Description of the Back-end Architecture:
StudyNotion uses a monolithic architecture, with the backend built using Node.js and
Express.js, and MongoDB as the primary database.
Features and Functionalities of the Back-end:
The back end of StudyNotion provides a range of features and functionalities, including:

1. User authentication and authorization: Students and instructors can sign up and log in
   to the platform using their email addresses and password. The platform also supports
   OTP (One-Time Password) verification and forgot password functionality for added
   security.
1. Course management: Instructors can create, read, update, and delete courses, as well
   as manage course content and media. Students can view and rate courses.
1. Payment Integration: Students will purchase and enrol on courses by completing the
   checkout flow that is followed by Razorpay integration for payment handling.
1. Cloud-based media management: StudyNotion uses Cloudinary, a cloud-based media
   management service, to store and manage all media content, including images, videos,
   and documents.
1. Markdown formatting: Course content in document format is stored in Markdown
   format, which allows for easier display and rendering on the front end.
   Frameworks, Libraries, and Tools used:
   The back end of StudyNotion uses a range of frameworks, libraries, and tools to ensure its
   functionality and performance, including:
1. Node.js: Node.js is used as the primary framework for the back end.
1. MongoDB: MongoDB is used as the primary database, providing a flexible and scalable
   data storage solution.
1. Express.js: Express.js is used as a web application framework, providing a range of
   features and tools for building web applications.
1. JWT: JWT (JSON Web Tokens) are used for authentication and authorization,
   providing a secure and reliable way to manage user credentials.
1. Bcrypt: Bcrypt is used for password hashing, adding an extra layer of security to user
   data.
1. Mongoose: Mongoose is used as an Object Data Modeling (ODM) library, providing a
   way to interact with MongoDB using JavaScript

### Data Models and Database Schema:

The back end of StudyNotion uses a range of data models and database schemas to
manage data, including:

1. Student schema: Includes fields such as name, email, password, and course details
   for each student.
2. Instructor schema: Includes fields such as name, email, password, and course
   details for each instructor.
3. Course schema: Includes fields such as course name, description, instructor details,
   and media content.
   Overall, the back-end of StudyNotion is designed to provide a robust and scalable solution
   for an ed-tech platform, with a focus on security, reliability, and ease of use. By using the
   right frameworks, libraries, and tools, we can ensure that the platform functions smoothly
   and provides an optimal user experience for all its users.

## API Design

![Database Schema](images/schema.png)
The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.
For detailed API documentation and endpoints, refer to the [API Documentation](/api-docs).

## Installation

1. Clone the repository: `git clone https://github.com/username/repo.git`
2. Navigate to the project directory: `cd StudyNotion`
3. Install dependencies: `npm install`

## Configuration

1. Set up a MongoDB database and obtain the connection URL.
2. Create a `.env` file in the root directory with the following environment variables:
   ```
   MONGODB_URI=<your-mongodb-connection-url>
   JWT_SECRET=<your-jwt-secret-key>
   ```

## Usage

1. Start the server: `npm start`
2. Open a new terminal and navigate to the `client` directory: `cd client`
3. Start the React development server: `npm start`
   Access the application in your browser at `http://localhost:3000`.

## API Design

The StudyNotion platform's API is designed following the REST architectural style. The
API is implemented using Node.js and Express.js. It uses JSON for data exchange and
follows standard HTTP request methods such as GET, POST, PUT, and DELETE.
Sample list of API endpoints and their functionalities:

1. /api/auth/signup (POST) - Create a new user (student or instructor) account.
2. /api/auth/login (POST) – Log in using existing credentials and generate a JWT
   token.
3. /api/auth/verify-otp (POST) - Verify the OTP sent to the user's registered email.
4. /api/auth/forgot-password (POST) - Send an email with a password reset link to
   the registered email.
5. /api/courses (GET) - Get a list of all available courses.
6. /api/courses/:id (GET) - Get details of a specific course by ID.
7. /api/courses (POST) - Create a new course.
8. /api/courses/:id (PUT) - Update an existing course by ID.
9. /api/courses/:id (DELETE) - Delete a course by ID.
10. /api/courses/:id/rate (POST) - Add a rating (out of 5) to a course.
    Sample API requests and responses:
11. GET /api/courses: Get all courses
    - Response: A list of all courses in the database
12. GET /api/courses/:id: Get a single course by ID
    - Response: The course with the specified ID
13. POST /api/courses: Create a new course
    - Request: The course details in the request body
    - Response: The newly created course
14. PUT /api/courses/:id: Update an existing course by ID
    - Request: The updated course details in the request body
    - Response: The updated course
15. DELETE /api/courses/:id: Delete a course by ID
    - Response: A success message indicating that the course has been deleted.
      In conclusion, the REST API design for the StudyNotion ed-tech platform is a crucial part
      of the project. The API endpoints and their functionalities are designed to ensure seamless
      communication between the front-end and back-end of the application. By following
      RESTful principles, the API will be scalable, maintainable, and reliable. The sample API
      requests and responses provided above illustrate how each endpoint will function and
      what kind of data it will accept or return. With this API design, StudyNotion will be able to
      provide a smooth user experience while ensuring security and stability.
