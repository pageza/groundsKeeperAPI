const mysql = require('mysql')

const createConnection = () => {
    return (mysql.createConnection({
        host: '10.0.0.239',
        user: 'zach',
        password: 'P@ssword123',
        database: 'groundsKeeper'
    }))
}



exports.createConnection = createConnection
