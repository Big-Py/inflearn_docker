const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let memberSchema = new Schema({
  name: {
    type: String
  },
  ages: {
    type: String
  },
  phone: {
    type: String
  }
}, {
    collection: 'dev_col_test'
  })

module.exports = mongoose.model('dev_col_test', memberSchema)
