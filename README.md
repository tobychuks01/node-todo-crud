# 📝 Todo CRUD App (Node.js + Express)

This project is a simple *CRUD API* built with Node.js and Express.  
It demonstrates the basic Create, Read, Update, and Delete (CRUD) operations using an in-memory array (no database required).  

This is mainly for *learning purposes* — to understand how REST APIs work with Node.js and Express.

---

## 🚀 Features
- Add a new todo (Create)
- View all todos (Read)
- View a single todo by ID (Read)
- Update a todo (Update)
- Delete a todo (Delete)

---

## 🛠 Technologies Used
- [Node.js](https://nodejs.org/) – JavaScript runtime
- [Express.js](https://expressjs.com/) – Web framework for Node.js
- [Nodemon](https://nodemon.io/) – Development tool that restarts the server when you save changes
- [Postman](https://www.postman.com/) – (optional) for testing the API endpoints

---

## 📂 Project Structure
todo-crud/
│
├── index.js        # Main server file
├── package.json    # Project configuration and scripts
├── .gitignore      # Files/folders Git should ignore
└── README.md       # Documentation (this file)

---

## 🖥 Getting Started

Follow these steps to run the project on your computer:

### 1. Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js)

Check your versions:
```bash
node -v
npm -v

### run the project
Development mode (auto-restart with Nodemon):
npm run dev
Production mode:
npm start
If everything works, you should see:
Server running on http://localhost:5000

API Endpoints

➕ Create a Todo

POST /todos
Request body (JSON):
{
  "task": "Learn Node.js"
}
Response:
{
  "id": 1,
  "task": "Learn Node.js"
}

Get All Todos

GET /todos
Response:
[
  { "id": 1, "task": "Learn Node.js" },
  { "id": 2, "task": "Build a CRUD app" }
]

Get Single Todo

GET /todos/:id
Example: /todos/1
Response:
{ "id": 1, "task": "Learn Node.js" }

Update a Todo

PUT /todos/:id
Request body (JSON):
{
  "task": "Master Express"
}
Response:
{ "id": 1, "task": "Master Express" }

❌ Delete a Todo

DELETE /todos/:id
Response:
{ "message": "Deleted" }

Testing with Postman

To test this API:
	1.	Download Postman.
	2.	Create a new request.
	3.	Choose the method (GET, POST, PUT, DELETE).
	4.	Enter the endpoint URL (e.g., http://localhost:5000/todos).
	5.	For POST/PUT, select Body → raw → JSON and add your JSON data.

⸻

🙌 Acknowledgements

This project was built as part of learning CRUD concepts with Node.js and Express.
The goal is to understand how backend APIs work without using a database yet.