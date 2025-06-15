# 📝 User Inquiry Form - MERN Stack Project

This is a simple full-stack **MERN** (MongoDB, Express, React, Node.js) application that allows users to submit inquiries via a form. The submitted data is stored in a MongoDB database, and displayed in a responsive table format with **Edit** and **Delete** functionalities.

This project was created as a hands-on practice to strengthen MERN stack skills, and utilizes modern libraries such as **TailwindCSS**, **Flowbite**, **React Toastify**, and **Axios**.

---

## 📸 Preview

![Project Preview](https://github.com/user-attachments/assets/f8e4d4a3-2061-4c0f-a23f-1b2738ec9cec)
) <!-- Replace with your actual image path -->

---

## 🚀 Features

- 📥 Submit user inquiries via a clean form
- 📋 Display all inquiries in a stylized table
- ✏️ Edit existing inquiries
- 🗑️ Delete inquiries with confirmation
- 💾 Data stored in MongoDB
- 🔗 Real-time updates using Axios
- ⚡ Fully responsive with TailwindCSS and Flowbite components
- ✅ Toast notifications for feedback

---

## 🛠️ Tech Stack

**Frontend:**
- React JS
- TailwindCSS
- Flowbite-React
- Axios
- React Toastify

**Backend:**
- Node.js
- Express
- Mongoose
- MongoDB
- CORS
- dotenv

---


## 📁 Project Structure

```
user-enquiry-mern/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   └── ...
├── server/               # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
└── README.md
```

---

## 📦 Getting Started

### 🔧 Clone the Repository

```bash
git clone https://github.com/Seboo-Dogar/User-Enquiry---MERN.git
cd User-Enquiry---MERN
```

---

### ⚙️ Setup Instructions

#### 1. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

#### 2. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

---

## 🧪 Usage

1. Open the frontend in your browser.
2. Submit the inquiry form.
3. View all submitted inquiries in a table.
4. Edit or delete records using the action buttons.

---

## 📌 Future Improvements

- Form validation using React Hook Form or Formik
- Add authentication (JWT-based)
- Deploy frontend (e.g., Vercel) and backend (e.g., Render)
- Add pagination, search, and filtering
- Add modals for confirmation and better UX

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, make your changes, and open a pull request.

---

## 📄 License

This project is open-source and free to use.

---

## 🙋‍♂️ Contact

- 💼 LinkedIn: [Sohaib Aslam](https://www.linkedin.com/in/sohaib-aslam-dev/)
- 🐙 GitHub: [Seboo-Dogar](https://github.com/Seboo-Dogar)

