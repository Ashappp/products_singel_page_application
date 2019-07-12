const UserModel = require('../models/Users');
const jwt = require('jsonwebtoken');

module.exports.LoginUser = async (req, res) => {
  try {
    const reqPassword = req.body.password;
    const reqLogin = req.body.login;
    const doc = await UserModel.find(
      { login: reqLogin },
      { password: reqPassword },
    );
    res.json({
      success: true,
      message: 'user created',
      createdUser: doc,
    });
  } catch (err) {
    res.json({
      err,
      success: false,
      message: 'user is not created',
    });
  }
};
