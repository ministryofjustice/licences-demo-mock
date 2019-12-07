const express = require('express')

const router = express.Router()

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
  const { nomsNumber } = req.params
  const ros = [
    {
      isPrisonOffenderManager: false,
      isUnallocated: false,
      isResponsibleOfficer: true,
      staff: { forenames: 'Ryan', surname: 'Orton'},
      staffCode: 'DELIUS_ID',
      team: { localDeliveryUnit: { code: 'lduCode', description: 'lduDescription' } },
      probationArea: { code: 'probationAreaCode', description: 'probationAreaDescription' },
    }
  ]

  res.send(ros)
})

module.exports = router
