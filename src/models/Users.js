const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsListSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

const ProductsListSchema = mongoose.model('products', ProductsListSchema);

module.exports = ProductsListSchema;
