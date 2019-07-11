const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
