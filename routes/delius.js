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

router.get('/offenders/nomsNumber/:nomsNumber/responsibleOfficers', (req, res) => {
  const { nomsNumber } = req.params
  const ros = [
    {
      nomsNumber,
      responsibleOfficerId: '12345',
      offenderManagerId: '12345',
      prisonOffenderManagerId: '12345',
      staffCode: 'DELIUS_ID',
      surname: 'Orton',
      forenames: 'Ryan',
      providerTeamCode: 'providerTeamCode',
      providerTeamDescription: 'provider team description',
      lduCode: 'lduCode',
      lduDescription: 'lduDescription',
      probationAreaCode: 'probationAreaCode',
      probationAreaDescription: 'probationAreaDescription',
      isCurrentRo: true,
      isCurrentOm: true,
      isCurrentPom: true,
      omStartDate: '01/01/2001',
      omEndDate: '01/01/2001',
    },
  ]

  res.send(ros)
})

module.exports = router
