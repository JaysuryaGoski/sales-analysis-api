const express = require('express')
const router = express.Router()

router.use('/customers',require('./customers.routes'))
router.use('/sales',require('./sales.routes'))

module.exports = router;