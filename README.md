<div align="center">

<br/>

```
███████╗███████╗██╗     ██╗      ██████╗ ██████╗  █████╗
██╔════╝██╔════╝██║     ██║     ██╔═══██╗██╔══██╗██╔══██╗
███████╗█████╗  ██║     ██║     ██║   ██║██████╔╝███████║
╚════██║██╔══╝  ██║     ██║     ██║   ██║██╔══██╗██╔══██║
███████║███████╗███████╗███████╗╚██████╔╝██║  ██║██║  ██║
╚══════╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
```

### 🛒 Full-Stack MERN E-Commerce Platform

**Dual-portal marketplace with Seller & Customer experiences**

<br/>

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

<br/>

</div>

---

## 📌 Overview

**Sellora** is a full-stack e-commerce web application built on the **MERN stack** (MongoDB, Express.js, React, Node.js). It features a **dual-portal system** — a dedicated **Seller Portal** for managing products and a **Customer Portal** for browsing, shopping, and managing orders. Authentication is secured using **JSON Web Tokens (JWT)** with role-based access control.

---

## ✨ Features

### 👤 Authentication & Authorization
- Secure user registration and login
- JWT-based authentication with role-based access (`customer` / `seller`)
- Protected routes for both portals

### 🛍️ Customer Portal
- Browse all available products
- View individual product details
- Add products to **Cart**
- Save and manage **delivery addresses**
- Clean, responsive shopping experience

### 🏪 Seller Portal
- Create new product listings
- Update and manage existing products
- Seller-only access enforced via JWT middleware
- Dashboard to manage inventory

### 📦 Product Management
- Full product CRUD (Create, Read, Update — Seller only)
- Product listing page with all available items
- Detailed individual product view

---

## 🗂️ Project Structure

```
sellora/
│
├── client/                   # React Frontend
│   ├── public/
│   └── src/
│       ├── components/       # Reusable UI components
│       ├── pages/            # Route-level pages
│       │   ├── Home.jsx
│       │   ├── ProductDetail.jsx
│       │   ├── Cart.jsx
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   └── seller/       # Seller portal pages
│       ├── context/          # Auth & Cart context
│       ├── utils/            # Axios config, helpers
│       └── App.jsx
│
├── server/                   # Node.js + Express Backend
│   ├── config/               # DB connection
│   ├── controllers/          # Route logic
│   ├── middleware/           # JWT auth middleware
│   ├── models/               # Mongoose schemas
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Cart.js
│   ├── routes/               # API routes
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   └── cart.routes.js
│   └── server.js
│
├── .env
└── README.md
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, React Router DOM |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT), bcryptjs |
| **HTTP Client** | Axios |
| **Styling** | CSS / Tailwind CSS |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/shahbaz00000/sellora.git
cd sellora
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

Start the backend server:

```bash
npm run dev
```

> Server runs on `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd client
npm install
npm start
```

> React app runs on `http://localhost:3000`

---

## 🔐 API Endpoints

### Auth Routes — `/api/auth`

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/register` | Register new user | Public |
| `POST` | `/login` | Login & receive JWT | Public |

### Product Routes — `/api/products`

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/` | Get all products | Public |
| `GET` | `/:id` | Get product by ID | Public |
| `POST` | `/` | Create new product | Seller only 🔒 |
| `PUT` | `/:id` | Update product | Seller only 🔒 |
| `DELETE` | `/:id` | Delete product | Seller only 🔒 |

### Cart Routes — `/api/cart`

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `GET` | `/` | Get user's cart | Customer 🔒 |
| `POST` | `/add` | Add item to cart | Customer 🔒 |
| `DELETE` | `/remove/:id` | Remove item | Customer 🔒 |

### Address Routes — `/api/address`

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| `POST` | `/save` | Save delivery address | Customer 🔒 |
| `GET` | `/` | Get saved addresses | Customer 🔒 |

---

## 👥 User Roles

```
┌─────────────────────────────────────────────────────┐
│                     SELLORA USERS                   │
├──────────────────────┬──────────────────────────────┤
│      CUSTOMER        │           SELLER             │
├──────────────────────┼──────────────────────────────┤
│ ✅ Browse products   │ ✅ All customer features      │
│ ✅ View product info │ ✅ Create products            │
│ ✅ Add to cart       │ ✅ Update products            │
│ ✅ Save address      │ ✅ Delete products            │
│ ❌ Manage products   │ ✅ Seller dashboard           │
└──────────────────────┴──────────────────────────────┘
```

---

## 📸 Screenshots

> _Add screenshots of your app here_

| Page | Preview |
|------|---------|
| Home / All Products | _(screenshot)_ |
| Product Detail | _(screenshot)_ |
| Cart Page | _(screenshot)_ |
| Seller Dashboard | _(screenshot)_ |
| Login / Register | _(screenshot)_ |

---

## 🔮 Future Enhancements

- [ ] Razorpay / Stripe payment integration
- [ ] Order tracking system
- [ ] Product search & category filters
- [ ] Seller analytics dashboard
- [ ] Image upload via Cloudinary
- [ ] Email notifications
- [ ] Docker deployment

---

## 👨‍💻 Author

**Shahbaz**
B.Tech — AI & Data Science | GNIOT, Greater Noida

[![GitHub](https://img.shields.io/badge/GitHub-shahbaz00000-181717?style=for-the-badge&logo=github)](https://github.com/shahbaz00000)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/your-linkedin)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

*Built with ❤️ using the MERN Stack*

</div>
