const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.MongoClient.connect(process.env.MONGODB_URI || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/TodoApp');



module.exports = {mongoose};
