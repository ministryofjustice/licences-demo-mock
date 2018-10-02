const express = require('express');
const router = express.Router();
const hdcCandidates = require('./stubs/hdcCandidates');

router.get('/externalRef/:deliusUserName/COM', function(req, res) {
    res.send(hdcCandidates)
});

module.exports = router;
