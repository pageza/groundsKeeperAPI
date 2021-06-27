const express = require('express')
const router = express.Router()
const workRoutes = require('../controllers/workRoutes')

router.get('/', (req,res,next) => {
    workRoutes.allRoutes(req,res)
})
router.get('/:name', (req,res,next) => {
    workRoutes.oneRouteByName(req,res, next)
})
router.get('/emp/:id', (req,res,next) => {
    workRoutes.oneRouteByPerson(req,res)
})
router.get('/city/:city', (req,res,next) => {
    workRoutes.oneRouteByCity(req,res)
})
router.get('/zipcode/:zip', (req,res,next) => {
    workRoutes.oneRouteByZipcode(req,res)
})
module.exports = router
