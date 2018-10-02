const express = require('express');
const router = express.Router();
const hdcCandidates = require('./stubs/hdcCandidates');

router.get('/home-detention-curfew-candidates', function(req, res) {
    res.send(hdcCandidates)
});

router.post('/bookings', function(req, res) {
    const bookingNumbers = req.body;
    const candidates = hdcCandidates.filter(candidate => bookingNumbers.includes(String(candidate.bookingId)));
    res.send(candidates)
});

router.get('/bookings/:bookingId/aliases', function(req, res) {
    res.send([
        {
            "firstName": "Marky",
            "middleName": "string",
            "lastName": "Andrews",
            "age": 0,
            "dob": "2018-01-11",
            "gender": "string",
            "ethnicity": "string",
            "nameType": "string",
            "createDate": "2018-01-11"
        }
    ])
});

module.exports = router;
