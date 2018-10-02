const express = require('express');
const router = express.Router();

router.get('/:bookingId', function(req, res) {
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

module.exports = router;
