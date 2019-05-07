const express = require('express')

const router = express.Router()
const getCaselist = require('./helpers/caselistForUser')

router.get('/staff/staffCode/:staffCode/managedOffenders', (req, res) => {
  const caselist = getCaselist(req.headers.authorization)

  res.send(caselist)
})

router.get('/offenders/nomsNumber/:nomsId/responsibleOfficer', (req, res) => {
  const ro = {
    username: 'RO_USER',
    staffCode: 'DELIUS_ID',
    forenames: 'Ryan',
    surname: 'Orton',
  }

  res.send(ro)
})

router.get('/health', (req, res) => {
  res.send({ status: 'UP' })
})

module.exports = router
