const express = require('express')
const router = express.Router()
const workOrders = require('../controllers/workOrders')

router.get('/', (req,res,next) => {
    workOrders.allWorkOrders(req,res)
})
router.get('/emp/:name', (req,res,next) => {
    workOrders.oneWorkOrderByName(req,res)
})
router.get('/location/:location', (req,res,next) => {
    workOrders.oneWorkOrderByLocation(req,res)
})
router.get('/id/:id', (req,res,next) => {
    workOrders.oneWorkOrderById(req,res)
})
module.exports = router
