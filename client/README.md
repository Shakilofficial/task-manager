# 🚀 Task Manager

A sleek, modern, and user-friendly **Task Manager** application built with **React**, **TypeScript**, **Tailwind CSS**, and **Axios**. Effortlessly create, manage, and filter your tasks with a beautiful UI and real-time feedback. Inspired by contemporary web design trends, this app integrates with a RESTful API for seamless CRUD operations.

---

### Live Demo: [Task Manager App](https://task-manager-app-ten-lyart.vercel.app/)

## ✨ Features

- 📝 **Create Tasks:** Add new tasks with a simple, validated form.
- ✅ **Toggle Task Status:** Mark tasks as pending or completed with a single click.
- 🔍 **Filter Tasks:** View all, pending, or completed tasks using a modern filter.
- 📱 **Responsive Design:** Optimized for desktop and mobile devices.
- ⚡ **Real-time Feedback:** Toast notifications for actions and errors.
- ⏳ **Loading States:** Smooth experience with loading indicators.
- 🎨 **Modern UI:** Gradient backgrounds, rounded corners, and smooth transitions.
- 🛡️ **Type Safety:** Fully typed with TypeScript.
- 🧩 **Component-Based:** Modular, maintainable codebase.
- 🚦 **Error Handling:** Robust error handling for API requests and forms.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **API Client:** Axios
- **Notifications:** react-hot-toast
- **Icons:** Lucide React
- **Form Management:** react-hook-form
- **Build Tool:** Vite
- **API:** [Tasks Manager API](https://tasks-manager-api-three.vercel.app/api/tasks)

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
cd task-manager/client
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://tasks-manager-api-three.vercel.app/api/tasks
```

### 4️⃣ Run the Development Server

```sh
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧑‍💻 Usage

- **Add a Task:** Enter a title and click "Add Task".
- **Toggle Status:** Click "Mark Complete" or "Completed" to change status.
- **Filter Tasks:** Use the filter buttons ("All", "Pending", "Completed").
- **Error Handling:** Empty titles or API errors show toast notifications.

---

## 🗂️ Project Structure

```
tasks-app/
├── client/
│   ├── src/
│   │   ├── api/                # API client for tasks
│   │   ├── components/         # UI and logic components
│   │   ├── interface/          # TypeScript interfaces
│   │   └── Home.tsx            # Main app component
│   ├── public/                 # Static assets
│   ├── .env                    # Environment variables
│   ├── package.json            # Dependencies & scripts
│   └── README.md               # Project documentation
└── server/                     # (Optional) Backend API
```

---

## 🔗 API Endpoints

- `GET /api/tasks` — Fetch all tasks
- `POST /api/tasks` — Create a new task
- `PATCH /api/tasks/:id/toggle` — Toggle task status

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

## 🏗️ Design Patterns

- **Component-Based Architecture:** Modular, reusable components.
- **Separation of Concerns:** API logic, UI, and state management are separated.
- **Single Source of Truth:** Task state managed in `Home.tsx`.
- **Centralized Error Handling:** Toast notifications for feedback.
- **Type Safety:** TypeScript interfaces throughout.

---

## 💎 UI/UX Highlights

- **Modern Aesthetic:** Gradients, rounded corners, subtle shadows.
- **Interactive Elements:** Smooth hover effects and transitions.
- **Accessibility:** Proper roles and validation.
- **Toast Notifications:** Unique IDs to prevent duplicates.

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
GitHub Issues: [Open an issue](https://github.com/shakilOfficial/task-manager/issues)

---

## 🌟 Star this repo if you
