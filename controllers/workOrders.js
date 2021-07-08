const db = require('./databaseController/mysql')
const query = require('./databaseController/workOrderQueries')

module.exports = {
    allWorkOrders: (req,res) => {
        db.createConnection().query(query.allWorkOrders(), (err, results) => {
            if (err) throw err
            res.json(results)
        })
    },
    oneWorkOrderByName: (req,res) => {
        let name = req.params.name
        db.createConnection().query(query.oneWorkOrderByName(name), (err, results) => {
            if (err) throw err
            res.json(results)
        })
    },
    oneWorkOrderByLocation: (req,res) => {
        let location = req.params.location
        db.createConnection().query(query.onWorkOrderByLocation(location), (err, results) => {
            if (err) throw err
            res.json(results)
        })
    },
    oneWorkOrderById: (req,res) => {
        let id = req.params.id
        db.createConnection().query(query.oneWorkOrderById(id), (err, results) => {
            if (err) throw err
            res.json(results)
        })
    },
    getWorkOrderCount: (req,res) => {
        let id = req.params.id
        db.createConnection().query(query.workOrderCount(id), (err, results) => {
            if (err) throw err
            res.json(results)
        })
    }
}
