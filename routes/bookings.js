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
            "offenceDescription": "Possess with intent to supply a controlled drug of Class A - Cocaine"
        },
        {
            "bookingId": 1200635,
            "offenceDescription": "Adult invite a child to participate in a lottery"
        },
        {
            "bookingId": 1200635,
            "offenceDescription": "Abandoning fighting dog"
        },
        {
            "bookingId": 1200635,
            "offenceDescription": "Armed robbery"
        },
        {
            "bookingId": 1200635,
            "offenceDescription": "Battery"
        }
    ];

    res.send([crimes[Math.floor(Math.random() * crimes.length)]])
});

router.get('/:bookingId/relationships', function(req, res) {
    res.send([
        {
            "lastName": "Ryan",
            "firstName": "Orton",
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
