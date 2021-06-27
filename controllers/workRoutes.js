const db = require('./databaseController/mysql')
const query = require('./databaseController/routeQueries')


module.exports =  {
    allRoutes: (req,res) => {
        db.createConnection().query(query.allRoutes(), (err, results, fields) => {
            if (err) throw err
            res.json(results)
        })
    },
    oneRouteByName: (req, res) => {
        let routeName = req.params.name
        db.createConnection().query(query.oneRouteByName(routeName), (err, results, fields) => {
            if (err) throw err
            res.json(results)
        })
    },
    oneRouteByPerson: (req, res) => {
        let routeEmployee = req.params.id
        db.createConnection().query(query.oneRouteByPerson(routeEmployee), (err, results, fields) => {
            if (err) throw err
            res.json(results)
        })
    },
    oneRouteByCity: (req, res) => {
        let city = req.params.city
        db.createConnection().query(query.oneRouteByCity(city), (err, results, fields) => {
            if (err) throw err
            res.json(results)
        })
    },
    oneRouteByZipcode: (req, res) => {
        let zip = req.params.zip
        db.createConnection().query(query.oneRouteByZipcode(zip), (err, results, fields) => {
            if (err) throw err
            res.json(results)
        })
    }
}
