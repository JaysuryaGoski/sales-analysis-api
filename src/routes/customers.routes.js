const express = require('express')
const router = express.Router()
const {getCustomersWithOrders} = require('../controllers/customers.controller.js')

router.get('/',getCustomersWithOrders)

module.exports = router