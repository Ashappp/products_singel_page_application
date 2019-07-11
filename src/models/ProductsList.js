const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  createBy: {
    type: String,
    required: true,
  },
});

const ProductsListSchema = mongoose.model('products', ProductsListSchema);

module.exports = ProductsListSchema;
