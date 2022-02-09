const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '5x)Q>3K=hfuVJ3_}',
        database: 'employee_db'
    },
    console.log('Connected to the employee database')
);

db.query(`SELECT * FROM employee`, (err, rows) => {
    
})

app.get('/', (req, res) => {
    res.json({
        message: 'Test message'
    });
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});