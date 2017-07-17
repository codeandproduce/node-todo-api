const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find(
  //   {_id: new ObjectID("596720ce7ab9f02fe5a0691e")}
  //   //QUERY!!
  // ).toArray().then((docs) => {

      //toArray() gives you everything in object form

  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });

  // db.collection('Todos').find(
  //   {_id: new ObjectID("596720ce7ab9f02fe5a0691e")}
  //   //QUERY!!
  // ).count().then((count) => {
  //   //count = count how many items fit the query.
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // });
  db.collection('Users').find(
    {"name": "Thomas"}
  ).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("couldn't do it fam", err);
  })


});
