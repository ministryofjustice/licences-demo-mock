const express = require('express')
const probationAreas = require('../routes/stubs/probationAreas')

const teamC01T04 = {
  code: 'C01T04',
  description: 'OMU A',
  telephone: '01234567890',
  localDeliveryUnit: { code: 'ABC124', description: 'ABC124 delivery unit' },
  district: { code: 'D', description: 'E' },
  borough: { code: 'F', description: 'G' },
}

const deliusTeams = [teamC01T04]

const RO_USER_TEST = {
  username: 'RO_USER_TEST',
  staffCode: 'DELIUS_ID_TEST',
  email: 'hdc_test+RO_USER_TEST@digital.justice.gov.uk',
  staff: {
    forenames: 'FIRSTA',
    surname: 'LASTA',
  },
  teams: deliusTeams,
}

const RO_USER = {
  username: 'RO_USER',
  staffCode: 'DELIUS_ID',
  email: 'hdc_test+RO_USER@digital.justice.gov.uk',
  staff: {
    forenames: 'JESSY',
    surname: 'SMITH',
  },
  teams: deliusTeams,
}

const staffDetailsByUsername = {
  RO_USER_TEST,
  RO_USER,
}

const staffDetailsByStaffCode = {
  DELIUS_ID_TEST: RO_USER_TEST,
  DELIUS_ID: RO_USER,
}

const router = express.Router()

router.get('/staff/username/:username', (req, res) => {
  const { username } = req.params
  const staffDetails = staffDetailsByUsername[username]
  if (staffDetails) {
    res.send(staffDetails)
  } else {
    res.sendStatus(404)
  }
})

router.get('/staff/staffCode/:staffCode', (req, res) => {
  const { staffCode } = req.params
  const staffDetails = staffDetailsByStaffCode[staffCode]
  if (staffDetails) {
    res.send(staffDetails)
  } else {
    res.sendStatus(404)
  }
})

router.get('/staff/staffCode/:staffCode/managedOffenders', (req, res) => {
  const { staffCode } = req.params

  const offenders = [
    {
      staffCode,
      offenderId: 1234567,
      nomsNumber: 'A5001DY',
      crnNumber: 1234567,
      offenderSurname: 'Andrews',
      isCurrentRo: true,
      isCurrentOm: true,
      isCurrentPom: true,
      omStartDate: '01/01/2001',
      omEndDate: '01/01/2001',
    },
  ]

  res.send(offenders)
})

router.get('/offenders/nomsNumber/:nomsNumber/allOffenderManagers', (req, res) => {
  const ros = [
    {
      isPrisonOffenderManager: false,
      isUnallocated: false,
      isResponsibleOfficer: true,
      staff: { forenames: 'Ryan', surname: 'Orton' },
      staffCode: 'DELIUS_ID',
      team: teamC01T04,
      probationArea: { code: 'ABC', description: 'ABC probation area' },
    },
  ]

  res.send(ros)
})

router.get('/probationAreas', (req, res) => {
  // return all probation areas
  const allProbationAreas = probationAreas.map(probArea => probArea.area.content)
  const response = { content: allProbationAreas }
  res.send(response)
})

router.get('/probationAreas/code/:code/localDeliveryUnits', (req, res) => {
  // return the LDUs for a specific probation area
  const { code: probationAreaCode } = req.params
  const probationArea = probationAreas.filter(probArea => probArea.area.content.code === probationAreaCode)
  const response = probationArea[0].ldus
  res.send(response)
})

module.exports = router
