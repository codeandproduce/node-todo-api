const express = require('express');
const bodyParser = require('body-parser');


//local modules
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todoInstance = new Todo({
    text: req.body.text
  });
  todoInstance.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log('Started on port ', port);
});


// //create an instance of the model
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// //save the instance
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
