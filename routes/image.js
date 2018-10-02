const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:imageId', function(req, res) {
    res.send({
        "imageId": 1,
        "captureDate": "2017-07-05",
        "imageView": "view",
        "imageOrientation": "orientation",
        "imageType": "type",
        "objectId": 0,
        "imageData": "data"
    })
});

router.get('/:imageId/data', function(req, res) {
    const src = fs.createReadStream('routes/images/jim.png');
    src.pipe(res);
});

module.exports = router;
