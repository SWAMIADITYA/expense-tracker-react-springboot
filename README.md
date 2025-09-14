# 💰 myWallet – Expense Tracker  

A modern and responsive **full-stack Expense Tracker** built using **React (Frontend)**, **Spring Boot (Backend)**, and **MySQL (Database)**.  
myWallet helps users manage income and expenses, track spending habits, and visualize data with charts.

---

## 🚀 Tech Stack  

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-green?logo=springboot)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange?logo=mysql)
![Tailwind CSS](https://img.shields.io/badge/UI-TailwindCSS-06B6D4?logo=tailwindcss)
![Git](https://img.shields.io/badge/Version%20Control-Git-black?logo=git)

---

## ✨ Features  

- ✅ **User Authentication** – Signup & Login (Role-based: Admin/User)  
- ✅ **Transactions** – Add, Edit, Delete income & expenses  
- ✅ **Categories** – Organize expenses (Food, Rent, Shopping, etc.)  
- ✅ **Dashboard** – View expense reports with interactive charts  
- ✅ **Admin Panel** – Manage users and categories  
- ✅ **Responsive UI** – Works on desktop, tablet, and mobile  

---

## 📸 Screenshots  

> 📌 Replace these placeholder images with real screenshots from your app.

### 🔑 Login Page  
![Login Page](https://via.placeholder.com/900x450?text=Login+Page+Screenshot)

<div align="center">

<img src="./screenshots/01_welcome_page.png.png" width="420" alt="Landing Page" />
<img src="./screenshots/02_login.png.png" width="420" alt="Login Page" />
<img src="./screenshots/03_signup.png.png" width="420" alt="Signup Page" />
<img src="./screenshots/04_dashboard.png.png" width="420" alt="Dashboard Overview" />
<img src="./screenshots/05_transactions.png.png" width="420" alt="Add Transaction" />
<img src="./screenshots/06_new_transaction.png.png" width="420" alt="Edit Transaction" />
<img src="./screenshots/07_saved_transactions.png.png" width="420" alt="saved Transaction" />
<img src="./screenshots/08_statistics.png.png" width="420" alt="graph" />
<img src="./screenshots/09_settings.png.png" width="420" alt="setting" />
<img src="./screenshots/10_admin_stuff.png.png" width="420" alt="admin stuff" />
<img src="./screenshots/11_users.png.png" width="420" alt="users" />
<img src="./screenshots/12_categories.png.png" width="420" alt="categories" />
<img src="./screenshots/13_new_category.png.png" width="420" alt="new categories" />

</div>

### 📊 Dashboard  
![Dashboard](https://via.placeholder.com/900x450?text=Dashboard+Screenshot)

---

## ⚡ Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker-react-springboot.git
cd expense-tracker-react-springboot
```

### 2️⃣ Backend Setup  
```bash
cd backend
mvn spring-boot:run
```
Make sure MySQL is running and update `application.properties` with your database credentials.

### 3️⃣ Frontend Setup  
```bash
cd frontend
npm install
npm start
```
Open **http://localhost:3000** in your browser.

---

## 🛠️ API Endpoints  

| Method | Endpoint             | Description           |
|-------:|---------------------:|----------------------:|
| POST   | `/auth/signup`       | Register a new user   |
| POST   | `/auth/login`        | Login user            |
| GET    | `/transactions`      | Get all transactions  |
| POST   | `/transactions`      | Add a transaction     |

---

## 🤝 Contributing  

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📄 License  

This project is licensed under the **MIT License** – free to use and modify.

---

## 👨‍💻 Author  

**Aditya Swami**  
📧 [Email Me](adityaswami.it@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/aditya-swami-67b8b7221/)  
🌐 [Portfolio Website](https://portfolioadityas.netlify.app)
