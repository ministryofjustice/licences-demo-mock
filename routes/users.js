const express = require('express');
const jwtDecode = require('jwt-decode');
const router = express.Router();
const profiles = {
  CA_USER: {
    "firstName": "Catherine",
    "lastName": "Amos",
    "staffId": "100",
    "email": "CA-DEMO@work",
    "activeCaseLoadId": "CA-DEMO",
  },
  CA_USER_TEST: {
    "firstName": "User",
    "lastName": "CA_USER",
    "staffId": "2",
    "email": "CA_USER@work",
    "activeCaseLoadId": "DEF",
  },
  CA_USER_MULTI: {
    "firstName": "User",
    "lastName": "CA_USER_MULTI",
    "staffId": "2",
    "email": "CA_USER@work",
    "activeCaseLoadId": "DEF",
  },
  RO_DEMO: {
    "firstName": "Ryan",
    "lastName": "Orton",
    "staffId": "1",
    "email": "RO_USER@work",
    "activeCaseLoadId": "ABC",
  },
  RO_USER_TEST: {
    "firstName": "User",
    "lastName": "RO_USER",
    "staffId": "2",
    "email": "RO_USER@work",
    "activeCaseLoadId": "ABC",
  },
  RO_USER_MULTI: {
    "firstName": "User",
    "lastName": "ROUSER_MULTI",
    "staffId": "1",
    "email": "RO_USER@work",
    "activeCaseLoadId": "ABC",
  },
  RO_USER: {
    "firstName": "Ryan",
    "lastName": "Orton",
    "staffId": "1",
    "email": "RO_USER@work",
    "activeCaseLoadId": "ABC",
  },
  DM_USER_TEST: {
    "firstName": "User",
    "lastName": "DM_USER",
    "staffId": "3",
    "email": "DM_USER@work",
    "activeCaseLoadId": "GHI",
  },
  DM_USER_MULTI: {
    "firstName": "User",
    "lastName": "DMUSER_MULTI",
    "staffId": "3",
    "email": "DM_USER@work",
    "activeCaseLoadId": "GHI",
  },
  DM_USER: {
    "firstName": "Dianne",
    "lastName": "Matthews",
    "staffId": "3",
    "email": "DM_USER@work",
    "activeCaseLoadId": "GHI",
  },
};

const roles = {
  CA: {
    "roleId": 0,
    "roleName": "string",
    "roleCode": "LEI_LICENCE_CA",
    "parentRoleCode": "string",
  },
  RO: {
    "roleId": 0,
    "roleName": "string",
    "roleCode": "LEI_LICENCE_RO",
    "parentRoleCode": "string",
  },
  DM: {
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
  const role = getRoleCode(req.headers.authorization);
  res.send(role)
});

function getProfile(token) {
  return findFirstFromToken(token, profiles);
}

function getRoleCode(token) {
  const roleCode = findFirstFromToken(token, roles, 'ROLE');
  return roleCode ? [roleCode] : [];
}

function findFirstFromToken(token, roleHash, type = 'PROFILE') {
  // Authorization expected to be of form 'Bearer x'
  const accessToken = token.split(' ')[1];
  try {
    // try for a real jwt to get the roles from
    const jwt = jwtDecode(accessToken);
    const lookup = type === 'ROLE' ? jwt.user_name.substring(0, 2) : jwt.user_name;
    return roleHash[lookup];
  } catch (error) {
    // otherwise fallback to a ca_token, ro_token, dm_token
    const lookup = type === 'ROLE' ? accessToken.substring(0, 2) : accessToken.replace('-token', '');
    return roleHash[lookup];
  }
}

module.exports = router;
