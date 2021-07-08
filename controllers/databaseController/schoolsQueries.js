module.exports = {
    getAllSchools: () => {
        return 'SELECT name FROM locations;'
    },
    getSchoolInfo: (name) => {
        console.log('in query req -->', name)

        let query = [
            "SELECT locations.id, locations.name, addresses.street_number, addresses.street, addresses.city, addresses.zipcode",
            "FROM locations",
            "INNER JOIN addresses",
            "ON locations.addresses_id = addresses.id",
            'AND locations.name = "' +  name + '";'
        ]
        console.log(query)
        return query.join("\n")
    }

}
