const mysql = require('mysql2');
const Database = require('./db/db')

const db = new Database(
    {
        host: 'localhost',
        user: 'root',
        password: '5x)Q>3K=hfuVJ3_}',
        database: 'employee_db'
    });

module.exports = db;