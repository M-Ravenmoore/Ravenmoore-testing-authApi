'use strict';

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  name: { type: String, required: true },
  todo: { type: String, required: true },
});

const todoModel = mongoose.model('tods', todoSchema);

module.exports = todoModel;
