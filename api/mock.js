/* eslint-disable no-undef */
const express = require('express');
const app = express();

let todos = [
  { id: 1, title: 'Take out the trash', completed: false },
  { id: 2, title: 'Do the dishes', completed: true }
];

app.get('/todos', (req, res) => {
  res.send({ data: todos });
});

app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === id);
  res.send({ data: todo });
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed
  };
  todos.push(newTodo);
  res.send({ data: newTodo });
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  todos[todoIndex] = { id, title: req.body.title, completed: req.body.completed };
  res.send({ data: todos[todoIndex] });
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  todos.splice(todoIndex, 1);
  res.send({ data: todos });
});

const port = 3000;
app.listen(port, () => {
  console.log(`To-do API listening at http://localhost:${port}`);
});