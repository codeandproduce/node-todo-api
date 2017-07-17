const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');



  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('596ae6c18047dd4769ddecce')
  // }, {
  //   $set: {
  //     //update to this!
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: "Chan Woo"
  }, {
    $set:{
      name: "Thomas Kim"
    },
    $inc:{
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });



});
