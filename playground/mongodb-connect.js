const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
     return console.log("unable to connect to MongoDB server");
  }
  console.log('connected to MongoDB server');

  db.collection("Todos").insertOne({
    text: "something to do",
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('unable to insert to do', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  //Insert new doc into Users(name, age, location)
  // db.collection("Users").insertOne({
  //   name: "Chan Woo",
  //   age: 16,
  //   location: "Shanghai"
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to insert data", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //




  db.close();

});
