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

module.exports = router;

function getToken(username) {
  if (username === 'CA_USER_TEST') {
    return 'catest-token'
  }

  if (username === 'CA_USER_MULTI') {
    return 'camulti-token'
  }

  if (username.includes('CA')) {
    return 'ca-token'
  }

  if (username === 'RO_USER_TEST') {
    return 'rotest-token'
  }

  if (username === 'RO_USER_MULTI') {
    return 'romulti-token'
  }

  if (username.includes('RO')) {
    return 'ro-token'
  }

  if (username === 'DM_USER_TEST') {
    return 'dmtest-token'
  }

  if (username === 'DM_USER_MULTI') {
    return 'dmmulti-token'
  }

  if (username.includes('DM')) {
    return 'dm-token'
  }
}