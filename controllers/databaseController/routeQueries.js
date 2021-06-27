const routeQuery = [
    "SELECT route_names.name, personnel.first_name, personnel.last_name,  locations.name, addresses.street_number, addresses.street, addresses.city, addresses.zipcode",
    "FROM routes",
    "INNER JOIN route_names",
    "ON routes.name_id = route_names.id",
    "INNER JOIN personnel",
    "ON routes.personnel_id = personnel.id",
    "INNER JOIN locations",
    "ON routes.location_id = locations.id",
    "INNER JOIN addresses",
    "ON locations.addresses_id = addresses.id;"
]
    module.exports = {
    allRoutes: () => {
        return routeQuery.join("\n")
    },
    oneRouteByName: (routeID) => {
        let query = routeQuery.slice(0)
        query.splice(4,0,'AND route_names.name = "'+ routeID +'"' )
        return query.join("\n")
    },
    oneRouteByPerson: (routeID) => {
        let query = routeQuery.slice(0)
        query.splice(6,0, 'AND personnel.employee_no = ' + routeID)
        return query.join("\n")
    },
    oneRouteByCity: (routeID) => {
        let query = routeQuery.slice(0)
        query[9] = query[9].replace(';','')
        query.splice(10,1,'AND addresses.city = "'+ routeID +'";')
        return query.join("\n")
    },
    oneRouteByZipcode: (routeID) => {
        let query = routeQuery.slice(0)
        query[9] = query[9].replace(';','')
        query.splice(10,1,'AND addresses.zipcode = "'+ routeID +'";')
        return query.join("\n")
    }
}
