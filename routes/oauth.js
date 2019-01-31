const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/token', function (req, res) {

  const token = getToken(req.body.username);

  res.send({
    "access_token": token,
    "token_type": "bearer",
    "refresh_token": "refreshToken",
    "expires_in": 1199,
    "scope": "read write",
    "internalUser": true,
    "jti": "91687796-3f69-441c-aaa9-1de7e314eee9"
  });
});

router.get('/health', (req, res) => {
  res.send({status: 'UP'});
});

module.exports = router;

function getToken(username) {
  return `${username}-token`;
}
