const express = require('express')
const router = express.Router()
const personnel = require('../controllers/personnel')

router.get('/', (req, res, next) => {
    personnel.allPersonnel(req,res)
})
router.get('/:id', (req, res, next) => {
    personnel.onePersonnel(req,res)
})
module.exports = router
