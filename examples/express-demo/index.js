const express = require('express');
const getTodos = require('./todos');
const cors = require('cors');

const app = express();

// app.use(cors());

app.get('/api/todos', function (req, res) {
  const todos = getTodos();
  res.json(todos);
});

app.listen(4567, () => {
  console.log('http://localhost:4567');
});
