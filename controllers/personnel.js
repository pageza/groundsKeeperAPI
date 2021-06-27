const db = require('./databaseController/mysql')

module.exports = {
    allPersonnel: (req, res) => {
        db.createConnection().query('SELECT * FROM groundsKeeper.personnel', (err, results, fields) => {
            if (err) throw err
            res.json(results)
        })
    },
    onePersonnel: (req, res) => {
        db.createConnection().query('SELECT * FROM groundsKeeper.personnel WHERE employee_no = ' + req.params.id + ';', (err, results, fields) => {
            if (err) throw err
            res.json(results)
        })
    }
}
