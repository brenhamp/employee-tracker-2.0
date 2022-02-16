const mysql = require('mysql2');
let inquirer = require('.ndex.js');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '5x)Q>3K=hfuVJ3_}',
        database: 'employee_db'
    },
    console.log('Connected to the employee database')
);

inquirer();

module.exports = db;