module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    jwt: {
        secret: proce.env.JWT_SECRET || 'apicreditos'
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'Pass1234abc',
        database: process.env.MYSQL_DB || 'pruebas',
    }
}