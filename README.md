# 🚀 Tasks-App: Modern Task Manager

Welcome to **Tasks-App**, a full-stack, modern, and professional task management solution.  
This project combines a beautiful React + TypeScript frontend with a robust Node.js + Express backend API.  
Effortlessly create, manage, and filter your tasks with a seamless user experience and reliable RESTful API.

---

## 🏗️ Project Overview

- **Frontend:**

  - Built with React, React-Hook-Form, TypeScript, Tailwind CSS, and Vite
  - Responsive, interactive, and visually appealing UI
  - Real-time feedback, filtering, and error handling

- **Backend:**
  - Node.js + Express RESTful API
  - CRUD operations for tasks
  - In-memory storage (easy to swap for a database)
  - Robust validation and error handling

---

## ✨ Features

- 📝 Create, update, delete, and toggle tasks
- ✅ Mark tasks as pending or completed
- 🔍 Filter tasks by status
- 📱 Responsive design for all devices
- ⚡ Real-time toast notifications
- ⏳ Loading indicators for smooth UX
- 🛡️ Type safety and error handling
- 🎨 Modern UI with gradients and rounded corners

---

## 🛠️ Tech Stack

| Layer      | Tech                                     |
| ---------- | ---------------------------------------- |
| Frontend   | React, TypeScript, Tailwind CSS, Vite    |
| Backend    | Node.js, Express                         |
| API Client | Axios                                    |
| Utilities  | react-hot-toast, react-hook-form, Lucide |

---

## 📦 Prerequisites

- **Node.js:** v18+
- **npm:** v9+ (or Yarn/PNPM)
- **Git:** For cloning the repository

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/shakilOfficial/tasks-manager-app.git
cd tasks-app
```

### 2️⃣ Setup the Backend (Server)

```sh
cd server
npm install
npm run dev
```

Server runs at [http://localhost:3000](http://localhost:3000) by default.

### 3️⃣ Setup the Frontend (Client)

```sh
cd ../client
npm install
npm run dev
```

Frontend runs at [http://localhost:5173](http://localhost:5173) by default.

### 4️⃣ Environment Variables

- **Client:**  
  Create a `.env` file in `client/`:
  ```env
  VITE_API_BASE_URL=http://localhost:3000/api/tasks
  ```
- **Server:**  
  Create a `.env` file in `server/` (optional):
  ```env
  PORT=3000
  ```

---

## 🗂️ Project Structure

```
tasks-app/
├── client/   # Frontend (React)
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── README.md
├── server/   # Backend (Express)
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── README.md
└── README.md # Root documentation
```

---

## 🔗 API Endpoints

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| GET    | `/api/tasks`            | Fetch all tasks    |
| POST   | `/api/tasks`            | Create a new task  
| PATCH  | `/api/tasks/:id/toggle` | Toggle task status |


**Response Format:**

```json
{
  "statusCode": number,
  "success": boolean,
  "message": string,
  "data": T
}
```

---

## 📚 Documentation

- [Frontend Documentation](./client/README.md)
- [Backend Documentation](./server/README.md)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Push and open a pull request

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 📬 Contact

Questions or feedback?  
Email: [mrshakilhossain@outlook.com](mailto:mrshakilhossain@outlook.com)  
GitHub Issues: [Open an issue](https://github.com/shakilOfficial/tasks-manager-app/issues)

---

## 🌟 Star this repo if you
