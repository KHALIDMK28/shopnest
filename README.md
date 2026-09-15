# ShopNest - E-Commerce Web Application

ShopNest ek full-stack MERN (MongoDB, Express, React, Node.js) e-commerce project hai, jise maine apne local system par successfully setup aur build kiya hai. Is project mein user login/signup, shopping cart, online payment integration, aur email services jaise saare main features shamil hain.

---

## 🛠️ Tech Stack & Features

* **Frontend:** React.js, Redux Toolkit (Cart Management ke liye), React-Bootstrap (UI Design ke liye)
* **Backend:** Node.js, Express.js (REST APIs ke liye)
* **Database:** MongoDB (Local Database)
* **Integrations:**
  * **Nodemailer:** Gmail App Password ke through emails aur OTP send karne ke liye
  * **Razorpay:** Online checkout aur payment flow handle karne ke liye
  * **Cloudinary & Multer:** Product images safely upload aur manage karne ke liye

---

## 🚀 How This Project Was Setup & Built

1. **Environment Configuration:** Backend ke `.env` file mein MongoDB connection link, JWT secret keys, Nodemailer credentials, aur API keys configure kiye hain.
2. **Backend Engine:** Express backend server port `5000` par run hota hai jo saari APIs handle karta hai.
3. **Frontend Connection:** React frontend app `localhost:3000` par run hoti hai jo Axios aur CORS ke through backend se data fetch karti hai.
4. **Data Management:** Redux Toolkit se Cart items aur User authentication manage hoti hai, aur saara storage MongoDB mein save hota hai.

---

## 🌐 Local Application URLs

* **Frontend App:** http://localhost:3000
* **Backend API Server:** http://localhost:5000
*