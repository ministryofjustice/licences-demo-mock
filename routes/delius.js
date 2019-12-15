const express = require('express')

const deliusTeams = [
  {
    code: 'TEAM_CODE',
    description: 'The Team',
    telephone: '01234567890',
    localDeliveryUnit: { code: 'A', value: 'B' },
    district: { code: 'D', value: 'E' },
    borough: { code: 'F', value: 'G' },
  },
]

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
      team: { localDeliveryUnit: { code: 'ABC124', description: 'ABC124 delivery unit' } },
      probationArea: { code: 'ABC', description: 'ABC probation area' },
    },
  ]

  res.send(ros)
})

module.exports = router
