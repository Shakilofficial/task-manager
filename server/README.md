# 🖥️ Task Manager Server

A robust, RESTful API backend for the **Task Manager** app, built with **Node.js** and **Express**. This server provides endpoints for creating, reading, updating, and deleting tasks, enabling seamless integration with modern frontend frameworks.

---

## 🚀 Features

- 📦 **CRUD Operations:** Create, read, update, and delete tasks.
- 🔄 **Toggle Task Status:** Mark tasks as pending or completed.
- 🛡️ **Validation & Error Handling:** Ensures data integrity and clear error responses.
- ⚡ **Fast & Lightweight:** Built with Express for high performance.
- 🌐 **CORS Support:** Ready for cross-origin requests from your frontend.
- 📝 **JSON API:** Clean, predictable response format.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Database:** In-memory (for demo; swap for MongoDB/PostgreSQL in production)
- **Other:** CORS, dotenv (for environment variables)

---

## 📦 Prerequisites

- **Node.js:** v18+
- **npm:** v9+ (or Yarn/PNPM)
- **Git:** For cloning the repository

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/shakilOfficial/task-manager.git
cd task-manager/server
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory (optional for custom port):

```env
PORT=3000
```

### 4️⃣ Start the Server

```sh
npm run dev
```

Server runs at [http://localhost:3000](http://localhost:3000) by default.

---

## 🔗 API Endpoints

| Method | Endpoint                | Description        |
| ------ | ----------------------- | ------------------ |
| GET    | `/api/tasks`            | Fetch all tasks    |
| POST   | `/api/tasks`            | Create a new task  |
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

## 🗂️ Project Structure

```
server/
├── index.js         # Main server file
├── routes/          # API route handlers
├── models/          # Task model (if using DB)
├── middleware/      # Custom middleware
├── .env             # Environment variables
├── package.json     # Dependencies & scripts
└── README.md        # Project documentation
```

---

## 🏗️ Design Patterns

- **RESTful Routing:** Clean, resource-based endpoints.
- **Middleware:** For error handling, validation, and CORS.
- **Separation of Concerns:** Routes, models, and middleware are organized.

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

## 🌟 Star this
