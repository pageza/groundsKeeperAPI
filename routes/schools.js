const express = require('express')
const router = express.Router()
const schools = require('../controllers/schools')

router.get('/', (req, res, next) => {
    schools.allSchools(req,res)
})
router.get('/info/:name', (req,res,next) => [
    schools.oneSchoolInfo(req,res)
])
module.exports = router
