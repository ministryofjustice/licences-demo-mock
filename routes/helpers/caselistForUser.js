const hdcDemoCandidates = require('../stubs/hdcDemoCandidates');
const hdcTestCandidates = require('../stubs/hdcTestCandidates');
const hdcMultiCandidates = require('../stubs/hdcMultiCandidates');

module.exports = (token) => {
  // TODO incorporate jwt token user differentiation

  const accessToken = token.split(' ')[1];

  if (accessToken.includes('test-token')) {
    return hdcTestCandidates
  }

  if (accessToken.includes('multi-token')) {
    return hdcMultiCandidates
  }

  return hdcDemoCandidates
};