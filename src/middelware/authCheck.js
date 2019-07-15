require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.authCheck = (req, res, next) => {
  let userToken = req.headers['x-access-token'] || req.headers['authorization'];

  if (userToken.startsWith('Bearer')) {
    userToken = userToken.slice(7, userToken.length);
  }

  if (userToken) {
    jwt.verify(userToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};
