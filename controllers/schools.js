const db = require('./databaseController/mysql')
const query = require('./databaseController/schoolsQueries')

module.exports = {
    allSchools: (req, res) => {
        db.createConnection().query(query.getAllSchools(), (err, results) => {
            if (err) throw err
            res.json(results)
        })
    },
    oneSchoolInfo: (req, res) => {
        db.createConnection().query(query.getSchoolInfo(req.params.name), (err, results) => {
            if (err) throw err
            res.json(results)
        })
    }
}
