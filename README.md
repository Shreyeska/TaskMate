
# TaskMate

A full-stack MERN application with secure authentication and task management. Features a React-based frontend and a Node.js + Express backend, using MySQL via Prisma ORM.

---

## 🔐 Backend Features

- User registration & login with **JWT**  
- Secure **HTTP-only cookie** sessions  
- **Task CRUD** operations (Create, Read, Delete)  
- Protected API routes for authenticated users  
- Database integration using **MySQL + Prisma**  
- Password hashing with **bcrypt**

## 🎯 Frontend Features

- User-friendly login & registration interfaces  
- Task dashboard for creating, viewing, and deleting tasks  
- Responsive UI built with **SCSS**  
- Toast notifications for feedback  
- Routing with **React Router**  
- API communication via **Axios**

---

## 🛠 Tech Stack

- **Frontend**: React.js + Vite, React Router, SCSS, Axios, react-toastify  
- **Backend**: Node.js, Express, Prisma ORM  
- **Authentication**: JWT + bcrypt  
- **Database**: MySQL  
- **Session Management**: HTTP-only cookies

---

## 🚀 Setup Instructions

### 1. Clone the Repositories

```bash
git clone https://github.com/Shreyeska/TaskMate.git

```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```bash
PORT=1234
DATABASE_URL="mysql://user:password@localhost:3306/taskdb"
JWT_SECRET="complex_secret_here"
FRONTEND_URL="http://localhost:3000"
NODE_ENV=development
DB_PORT=3306
DB_ROOT_PASSWORD=your_secure_root_password
DB_NAME=taskmate-db
DB_USER=your_secure_user
DB_PASSWORD=your_secure_password
```

Run database migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file:

```bash
VITE_API_BASE_URL=http://localhost:1234
```

Start the frontend server:

```bash
npm run dev
```

---

## 📝 .gitignore (for both projects)

```bash
.env
/node_modules
```
