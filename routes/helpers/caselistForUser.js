const jwtDecode = require('jwt-decode')
const hdcDemoCandidates = require('../stubs/hdcDemoCandidates')
const hdcTestCandidates = require('../stubs/hdcTestCandidates')
const hdcMultiCandidates = require('../stubs/hdcMultiCandidates')

module.exports = token => {
  const accessToken = token.split(' ')[1]

  let username
  try {
    // try for a real jwt to get the roles from
    const jwt = jwtDecode(accessToken)
    if (jwt.user_name) {
      username = jwt.user_name
    } else if (jwt.auth_source === 'none' && jwt.client_id === 'licencesadmin') {
      return hdcTestCandidates
    }
  } catch (error) {
    // otherwise fallback to grabbing username from token
    username = accessToken.replace('-token', '')
  }

  if (username.includes('_TEST')) {
    return hdcTestCandidates
  }

  if (username.includes('_MULTI')) {
    return hdcMultiCandidates
  }

  return hdcDemoCandidates
}
