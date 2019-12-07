const express = require('express')

const router = express.Router()

router.get('/local-delivery-units/:lduCode/functional-mailbox', (req, res) => {
  const { lduCode } = req.params

  res.send(`${lduCode}@probationteams.com`)
})

module.exports = router
