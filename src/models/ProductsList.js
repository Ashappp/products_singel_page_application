const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discription: {
      type: String,
      required: true,
      trim: true,
    },
    createBy: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  { timestamps: true },
);

const ProductsListModel = mongoose.model('products', ProductsListSchema);

module.exports = ProductsListModel;
