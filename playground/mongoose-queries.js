var {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = "596affbcf4abd91a2b7063a212321";

if (!ObjectID.isValid(id)){
  console.log('ID is not valid');
}else{
  Todo.findById(id).then((todo) => {
    if(!todo){
      return console.log('ID not found!');
    }else{
      console.log("Todo: ", todo);
    }
  }).catch((e) => {
    console.log(e);
  });
}
