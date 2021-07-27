// var mysql = require("mysql");
// var pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'mysql',
//     user: 'root',
//     password: 'mysql1234!',
//     database: 'myapp'
// });

// exports.pool = pool;


const mongoose = require('mongoose');

const connectionString = 'mongodb://mongodb:27017/admin';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true   
}).then(() => console.log('Successfully connected to mongodb'))
.catch(e => console.error(e));

const db = mongoose.connection;

module.exports = db;