const workOrderQuery = [
    "SELECT personnel.first_name, personnel.last_name, locations.name, work_orders.description, work_orders.date_requested",
    "FROM work_orders",
    "INNER JOIN personnel",
    "ON work_orders.personnel_id = personnel.id",
    "INNER JOIN locations",
    "ON work_orders.location_id = locations.id;"
]
module.exports = {
    allWorkOrders: () => {
        return workOrderQuery.join("\n")
    },
    oneWorkOrderByName: (lastName) => {
        let query = workOrderQuery.slice(0)
        query.splice(4,0, 'AND personnel.last_name = "' + lastName + '"')
        return query.join("\n")
    },
    onWorkOrderByLocation: (location) => {
        let query = workOrderQuery.slice(0)
        query[5] = query[5].replace(';', '')
        query.splice(6, 0, 'AND locations.name = "' + location + '";')
        return query.join("\n")
    },
    oneWorkOrderById: (id) => {
        let query = workOrderQuery.slice(0)
        query.splice(4, 0, 'AND work_orders.id = "' + id + '"')
        return query.join("\n")
    },
    workOrderCount: (id) => {
        let query = ['SELECT COUNT(description)',
                    'FROM work_orders',
                    'WHERE work_orders.location_id = '+ id +';']
        return query.join("\n")
    }
}
