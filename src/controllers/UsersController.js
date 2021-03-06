require('dotenv').config();
const UserModel = require('../models/Users');
const jwt = require('jsonwebtoken');

module.exports.LoginUser = async (req, res) => {
  const reqLogin = req.body.login;
  const reqPassword = req.body.password;
  const token = jwt.sign(
    { login: reqLogin, password: reqPassword },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '1h',
    },
  );

  try {
    const user = await UserModel.find({
      login: reqLogin,
      password: reqPassword,
    });
    res.json({
      success: true,
      message: 'login succses',
      userId: user[0]._id,
      token: token,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'login not succses',
    });
  }
};
