const express = require('express');
const router = express.Router();

router.get('/me/caseLoads', function(req, res) {
  res.send([
    {
      'caseLoadId': 'DEF',
      'description': 'Askham Grange',
      'type': 'string',
      'caseloadFunction': 'string',
    },
    {
      'caseLoadId': 'BEL',
      'description': 'Belmarsh',
      'type': 'string',
      'caseloadFunction': 'string',
    },
  ]);
});

router.put('/me/activeCaseLoad', function(req, res) {
  res.send({
    'caseLoadId': req.body.caseLoadId,
  });
});

module.exports = router;
