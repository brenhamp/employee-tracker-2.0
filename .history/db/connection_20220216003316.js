const mysql = require('mysql2');
let inquirer = require('../inquirer')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '5x)Q>3K=hfuVJ3_}',
        database: 'employee_db'
    },
    console.log('Connected to the employee database')
);

module.exports = db;