'use strict';

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  assignee: { type: String, required: true },
  text: { type: String, required: true },
  complete: {type:Boolean},
  difficulty: {type:Number},  
});

const todoModel = mongoose.model('tods', todoSchema);

module.exports = todoModel;
