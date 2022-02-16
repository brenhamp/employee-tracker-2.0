const connection = require('./db/')
const express = require('express');
const inquirer = require('./inquirer');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(inquirer);
// db.query(`SELECT * FROM employee`, (err, rows) => {
//     console.log(rows);
// });

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Test message'
//     });
// });

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});