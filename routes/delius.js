const express = require('express')

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
  const response = {
    content: [
      { code: 'Bir', description: 'Birmingham' },
      { code: 'Lon', description: 'London' },
      { code: 'C03', description: 'Coventry' },
      { code: 'Nottm', description: 'Nottingham' },
      { code: 'Shf', description: 'Sheffield' },
      { code: 'Lds', description: 'Leeds' },
    ],
  }
  res.send(response)
})

router.get('/probationAreas/code/:code/localDeliveryUnits', (req, res) => {
  const probationAreaCode = req.params.code
  let response

  switch (probationAreaCode) {
    case 'Lon':
      response = {
        content: [
          { code: 'ham', description: 'Hampstead' },
          { code: 'wtl', description: 'Waterloo' },
          { code: 'pic', description: 'Picadilly' },
        ],
      }
      break
    case 'C01':
      response = {
        content: [
          { code: 'cov1', description: 'cov-one' },
          { code: 'cov2', description: 'cov-two' },
          { code: 'cov3', description: 'cov-three' },
        ],
      }

      break
    case 'Shf':
      response = {
        content: [
          { code: 'shf1', description: 'shf-one' },
          { code: 'shf2', description: 'shf-two' },
          { code: 'shf3', description: 'shf-three' },
        ],
      }

      break
    case 'C03':
      response = {
        content: [
          { code: 'C03HART', description: 'C03-TEST-one' },
          { code: 'C03IOM', description: 'C03-TEST-two' },
          { code: 'C03007', description: 'C03-TEST-seven' },
        ],
      }

      break
    // the following do NOT have any teams assigned to them
    case 'Bir':
      response = {
        content: [],
      }

      break
    case 'Nottm':
      response = {
        content: [],
      }

      break
    default:
      response = {
        content: [],
      }
  }

  res.send(response)
})

module.exports = router
