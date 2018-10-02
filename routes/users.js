const express = require('express');
const router = express.Router();

router.get('/me', function(req, res) {
  const profile = getProfile(req.headers.authorization);

  res.send(profile)
});

router.get('/me/roles', function(req, res) {
    const profile = getRoleCode(req.headers.authorization);

    res.send(profile)
});


module.exports = router;

function getProfile(token) {
    if (token === 'bearer ca-token') {
        return {
            "firstName": "Catherine",
            "lastName": "Amos",
            "staffId": "100",
            "email": "CA-DEMO@work",
            "activeCaseLoadId": "CA-DEMO"
        }
    }

    if (token === 'bearer ro-token') {
        return {
            "firstName": "Ryan",
            "lastName": "Orton",
            "staffId": "1",
            "email": "RO_USER@work",
            "activeCaseLoadId": "ABC"
        }
    }

    if (token === 'bearer dm-token') {
        return {
            "firstName": "Dianne",
            "lastName": "Matthews",
            "staffId": "3",
            "email": "DM_USER@work",
            "activeCaseLoadId": "GHI"
        }
    }
}


function getRoleCode(token) {
    if (token === 'bearer ca-token') {
        return [
            {
                "roleId": 0,
                "roleName": "string",
                "roleCode": "LEI_LICENCE_CA",
                "parentRoleCode": "string"
            }
        ]
    }

    if (token === 'bearer ro-token') {
        return [
            {
                "roleId": 0,
                "roleName": "string",
                "roleCode": "LEI_LICENCE_RO",
                "parentRoleCode": "string"
            }
        ]
    }

    if (token === 'bearer dm-token') {
        return [
            {
                "roleId": 0,
                "roleName": "string",
                "roleCode": "LEI_LICENCE_DM",
                "parentRoleCode": "string"
            }
        ]
    }
}