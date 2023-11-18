const TOKEN_SECRET = require('../config.js');
const jwt = require('jsonwebtoken');

function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
}

module.exports = createAccessToken;



