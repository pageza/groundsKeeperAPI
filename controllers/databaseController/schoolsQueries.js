module.exports = {
    getAllSchools: () => {
        return 'SELECT name FROM locations;'
    },
    getSchoolInfo: (name) => {

        let query = [
            "SELECT locations.id, locations.name, addresses.street_number, addresses.street, addresses.city, addresses.zipcode",
            "FROM locations",
            "INNER JOIN addresses",
            "ON locations.addresses_id = addresses.id",
            'AND locations.name = "' +  name + '";'
        ]
        return query.join("\n")
    }

}
