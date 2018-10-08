const express = require('express');
const jwtDecode = require('jwt-decode');
const router = express.Router();
const profiles = {
  ca: {
    "firstName": "Catherine",
    "lastName": "Amos",
    "staffId": "100",
    "email": "CA-DEMO@work",
    "activeCaseLoadId": "CA-DEMO",
  },
  ro: {
    "firstName": "Ryan",
    "lastName": "Orton",
    "staffId": "1",
    "email": "RO_USER@work",
    "activeCaseLoadId": "ABC",
  },
  dm: {
    "firstName": "Dianne",
    "lastName": "Matthews",
    "staffId": "3",
    "email": "DM_USER@work",
    "activeCaseLoadId": "GHI",
  },
};

const roles = {
  ca: {
    "roleId": 0,
    "roleName": "string",
    "roleCode": "LEI_LICENCE_CA",
    "parentRoleCode": "string",
  },
  ro: {
    "roleId": 0,
    "roleName": "string",
    "roleCode": "LEI_LICENCE_RO",
    "parentRoleCode": "string",
  },
  dm: {
    "roleId": 0,
    "roleName": "string",
    "roleCode": "LEI_LICENCE_DM",
    "parentRoleCode": "string",
  },
};

router.get('/me', function(req, res) {
  const profile = getProfile(req.headers.authorization);

  res.send(profile)
});

router.get('/me/roles', function(req, res) {
  const profile = getRoleCode(req.headers.authorization);

  res.send(profile)
});

function getProfile(token) {
  return translateAuthorities(token, profiles);
}

function getRoleCode(token) {
  return [translateAuthorities(token, roles)];
}

function translateAuthorities(token, roleHash) {
  // Authorization expected to be of form 'Bearer x'
  const accessToken = token.split(' ')[1];
  try {
    // try for a real jwt to get the roles from
    const jwt = jwtDecode(accessToken);
    const authorities = jwt.authorities;
    return authorities.map(roleCode => roleHash[roleCode.slice(-2).toLowerCase()]).find(a => a !== null);
  } catch (error) {
    // otherwise fallback to a ca_token, ro_token, dm_token
    return roleHash[accessToken.substring(0, 2).toLowerCase()];
  }
}

module.exports = router;
