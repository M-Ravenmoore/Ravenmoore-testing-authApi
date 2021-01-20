'use strict';

const mongoose = require('mongoose');

const dragonSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  age: {type: Number, required: true},
});

const dragonModel = mongoose.model('dragon', dragonSchema);

module.exports = dragonModel;
