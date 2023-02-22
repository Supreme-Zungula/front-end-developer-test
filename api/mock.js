/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let todos = [
  { id: 1, title: "Take out the trash", completed: false },
  { id: 2, title: "Do the dishes", completed: true },
];

let users = [
  {
    id: 1,
    username: "supreme",
    email: "supreme@exigent.co.za",
    password: "1234",
  },
];

/** Todo list end-point */
app.get("/todos", (req, res) => {
  res.send({ data: todos });
});

app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  res.send({ data: todo });
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed,
  };
  todos.push(newTodo);
  res.send({ data: newTodo });
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  todos[todoIndex] = {
    id,
    title: req.body.title,
    completed: req.body.completed,
  };
  res.send({ data: todos[todoIndex] });
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  todos.splice(todoIndex, 1);
  res.send({ data: todos });
});

/** Users end-point */
app.get("/users", (req, res) => {
  res.send({ users });
});

app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.send({ data: user });
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  users.push(newUser);
  res.send({ data: newUser });
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  users[userIndex] = {
    id,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    e,
  };
  res.send({ data: users[userIndex] });
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = users.findIndex((todo) => todo.id === id);
  users.splice(todoIndex, 1);
  res.send({ data: users });
});

const port = 3000;
app.listen(port, () => {
  console.log(`To-do API listening at http://localhost:${port}`);
});
