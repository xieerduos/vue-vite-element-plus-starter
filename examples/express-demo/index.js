const express = require('express');
const getTodos = require('./todos');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/todos', function (req, res) {
  console.log(Date.now());
  const todos = getTodos();
  res.json(todos);
});

app.listen(4567, () => {
  console.log('http://localhost:4567');
});
