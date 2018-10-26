const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:imageId', function(req, res) {

    const {imageId} = req.params;

    res.send({
        imageId,
        "captureDate": "2017-07-05",
        "imageView": "view",
        "imageOrientation": "orientation",
        "imageType": "type",
        "objectId": 0,
        "imageData": "data"
    })
});

router.get('/:imageId/data', function(req, res) {

    const id = Number(req.params.imageId) - 1;
    const people = ['jim', 'eddie', 'pete', 'julian', 'stephen', 'mike'];

    const src = fs.createReadStream(`routes/images/${people[id]}.png`);
    src.pipe(res);
});

module.exports = router;
