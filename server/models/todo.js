const mongoose = require('mongoose');

//it's like the format you'd use for all of them
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //get rid of random trailing white spaces
    //like if you had '     so  ' => 'so'
  },
  completed:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

module.exports = {Todo};
