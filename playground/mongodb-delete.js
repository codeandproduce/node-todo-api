const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'something to do'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'free the dog'}).then((result) => {
  //   console.log(result);
  // });


  //findOneAndDelete

  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log("Id:",result.value.id);
    console.log("Text:", result.value.text);
    console.log("Completed:",result.value.completed);
  });

  //db.close();


});
