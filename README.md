Twitter Clone (MERN Stack + Cloudinary)

A fully functional Twitter Clone built using the MERN Stack (MongoDB, Express.js, React, Node.js) with Cloudinary for image uploads. Users can create tweets, follow/unfollow users, comment, like tweets, and more!

Features

✅ User Authentication (Signup, Login, Logout)
✅ Create, Read, Update, and Delete (CRUD) Tweets
✅ Image Uploading with Cloudinary
✅ Like and Comment on Tweets
✅ Follow/Unfollow Users
✅ View Profile & Edit Profile
✅ Fully Responsive Frontend (TailwindCSS)
✅ Real-time updates (Optional: Socket.io for notifications)

Tech Stack

Frontend:

React.js

Redux Toolkit (State Management)

TailwindCSS

Axios (API Calls)

Backend:

Node.js

Express.js

MongoDB (Mongoose ODM)

JWT Authentication

Cloudinary (For Image Uploads)

Multer (Handling File Uploads)

Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/twitter-clone.git
cd twitter-clone

2. Backend Setup

cd backend
npm install

2.1 Create a .env file inside the backend folder and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000

2.2 Start Backend Server

npm run dev

Server will run on http://localhost:5000

3. Frontend Setup

cd frontend
npm install

3.1 Start React App

npm run dev

App will run on http://localhost:5173 (Vite Default Port)

API Endpoints

Auth Routes

POST /api/auth/signup → Register User

POST /api/auth/login → Login User

GET /api/auth/me → Get Logged-In User Details

User Routes

GET /api/users/:id → Get User Profile

PUT /api/users/:id → Update Profile

POST /api/users/follow/:id → Follow User

POST /api/users/unfollow/:id → Unfollow User

Tweet Routes

POST /api/tweets → Create Tweet

GET /api/tweets → Get All Tweets

DELETE /api/tweets/:id → Delete Tweet

POST /api/tweets/:id/like → Like a Tweet

POST /api/tweets/:id/comment → Comment on a Tweet

Folder Structure

📂 twitter-clone
├── 📂 backend
│   ├── 📂 models (MongoDB Schemas)
│   ├── 📂 routes (Express API Routes)
│   ├── 📂 controllers (Route Handlers)
│   ├── server.js (Main Backend File)
│   ├── .env (Environment Variables)
│   ├── package.json
├── 📂 frontend
│   ├── 📂 src
│   │   ├── 📂 components
│   │   ├── 📂 pages
│   │   ├── 📂 redux
│   │   ├── main.jsx
│   ├── package.json
│   ├── vite.config.js
└── README.md

Deployment

Backend Deployment (Render/Heroku/Vercel)

Push your code to GitHub

Deploy to Render (or any backend hosting service)

Set environment variables (MONGO_URI, JWT_SECRET, CLOUDINARY keys)

Frontend Deployment (Vercel/Netlify)

Push frontend code to GitHub

Deploy using Vercel or Netlify

Update the backend API URL in frontend/src/config.js

Contributing

Feel free to fork this repository and submit PRs. If you have suggestions or find issues, open an issue.

License

This project is Open Source. You can use it for learning and building your own versions!

🚀 Happy Coding!
