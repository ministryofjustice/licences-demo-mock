const express = require('express');
const router = express.Router();

router.get('/:bookingId/aliases', function(req, res) {
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

router.get('/:bookingId/identifiers', function(req, res) {
    res.send([
        {
            "type": "PNC",
            "value": "PNC/A0001XX",
            "issuedAuthorityText": "issuedBySomeone",
            "issuedDate": "01-01-2001",
            "caseloadType": "INST"
        },
        {
            "type": "CRO",
            "value": "CRO/A0001XX",
            "issuedAuthorityText": "issuedBySomeone",
            "issuedDate": "01-01-2001",
            "caseloadType": "INST"
        },
        {
            "type": "middleName",
            "value": "Middle",
            "issuedAuthorityText": "issuedBySomeone",
            "issuedDate": "01-01-2001",
            "caseloadType": "INST"
        }
    ])
});

router.get('/:bookingId/mainOffence', function(req, res) {

    const crimes = [
        {
            "bookingId": 1200635,
            "offenceDescription": "Cause exceed max permitted wt of artic' vehicle - No of axles/configuration (No MOT/Manufacturer's Plate)"
        }
    ];

    res.send(crimes)
});

router.get('/:bookingId/relationships', function(req, res) {
    res.send([
        {
            "lastName": "Orton",
            "firstName": "Ryan",
            "middleName": "string",
            "contactType": "string",
            "contactTypeDescription": "string",
            "relationship": "string",
            "relationshipDescription": "string",
            "emergencyContact": true,
            "nextOfKin": true,
            "relationshipId": 0,
            "personId": 123
        }
    ])
});


module.exports = router;
