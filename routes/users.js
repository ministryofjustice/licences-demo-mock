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
  catest: {
    "firstName": "User",
    "lastName": "CA_USER",
    "staffId": "2",
    "email": "CA_USER@work",
    "activeCaseLoadId": "DEF",
  },
  camulti: {
    "firstName": "User",
    "lastName": "CA_MULTI_USER",
    "staffId": "2",
    "email": "CA_USER@work",
    "activeCaseLoadId": "DEF",
  },
  ro: {
    "firstName": "Ryan",
    "lastName": "Orton",
    "staffId": "1",
    "email": "RO_USER@work",
    "activeCaseLoadId": "ABC",
  },
  rotest: {
    "firstName": "User",
    "lastName": "RO_USER",
    "staffId": "2",
    "email": "RO_USER@work",
    "activeCaseLoadId": "ABC",
  },
  romulti: {
    "firstName": "User",
    "lastName": "ROMULTI_USER",
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
  dmtest: {
    "firstName": "User",
    "lastName": "DM_USER",
    "staffId": "3",
    "email": "DM_USER@work",
    "activeCaseLoadId": "GHI",
  },
  dmmulti: {
    "firstName": "User",
    "lastName": "DMMULTI_USER",
    "staffId": "3",
    "email": "DM_USER@work",
    "activeCaseLoadId": "GHI",
  }
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
  const role = getRoleCode(req.headers.authorization);
  res.send(role)
});

function getProfile(token) {
  return translateAuthorities(token, profiles);
}

function getRoleCode(token) {
  return [translateAuthorities(token, roles, 'ROLE')];
}

function translateAuthorities(token, roleHash, type = 'PROFILE') {
  // Authorization expected to be of form 'Bearer x'
  const accessToken = token.split(' ')[1];
  try {
    // try for a real jwt to get the roles from
    const jwt = jwtDecode(accessToken);
    const authorities = jwt.authorities;
    return authorities.map(roleCode => roleHash[roleCode.slice(-2).toLowerCase()]).find(a => a);
  } catch (error) {
    // otherwise fallback to a ca_token, ro_token, dm_token
    if (type === 'ROLE') {
      return roleHash[accessToken.substring(0, 2).toLowerCase()];
    }

    return roleHash[accessToken.split('-')[0].toLowerCase()];
  }
}

module.exports = router;
