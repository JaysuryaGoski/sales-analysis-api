const express = require('express')
const router = express.Router()
const {
    getWeekWiseSales,
    getHighestBusinessDate,
    getPercentageChange,
    getBusinessImprovement
} = require('../controllers/sales.controller.js')

router.get('/weekwise',getWeekWiseSales)
router.get('/highest-business-date',getHighestBusinessDate)
router.get('/percentage-change',getPercentageChange)
router.get('/business-improvement',getBusinessImprovement)

module.exports = router