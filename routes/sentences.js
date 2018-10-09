const express = require('express');
const router = express.Router();
const getCaselist = require('./helpers/caselistForUser');
const hdcSearchableCanditates = require('./stubs/hdcSearchableCandidates');

router.get('/', function (req, res) {
  res.send([hdcSearchableCanditates.find(candidate => candidate.offenderNo === req.query.offenderNo)])
});

router.get('/home-detention-curfew-candidates', function (req, res) {
  const caselist = getCaselist(req.headers.authorization);

  res.send(caselist)
});

router.post('/bookings', function (req, res) {
  const bookingNumbers = req.body.map(Number);
  const caselist = getCaselist(req.headers.authorization);
  const candidates = caselist.filter(candidate => bookingNumbers.includes(candidate.bookingId));

  res.send(candidates)
});

router.get('/bookings/:bookingId/aliases', function (req, res) {
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
