const _ = require('lodash');

const express = require('express');
const bodyParser = require('body-parser');


//local modules
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {authenticate} = require('./middleware/authenticate');

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

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  if(_isBoolean(body.completed) && body.completed){
    body.completedAt = new Data().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

});

app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);
  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });

});

app.listen(port, () => {
  console.log('Started on port ', port);
});




app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
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
