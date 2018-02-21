const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Chore = new Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Chore', Chore)
