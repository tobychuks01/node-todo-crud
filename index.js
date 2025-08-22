const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Our in-memory "database"
let todos = [];

// ✅ Create a Todo
app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// ✅ Read All Todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// ✅ Read a Single Todo
app.get("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

// ✅ Update a Todo
app.put("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todo.task = req.body.task || todo.task;
  res.json(todo);
});

// ✅ Delete a Todo
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.json({ message: "Todo deleted" });
});

// Start server
app.listen(port, () => {
  console.log('✅ Server running on http://localhost:${port}');
});