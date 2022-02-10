const express = require('express');
const inquirer = require('inquirer');
const menu = require('inquirer-menu')
const router = express.Router();



//View all departments

const mainMenu = async () => {
    inquirer
        .prompt([

        ])
}
// router.get('department', (req, res) => {
//     const sql = `SELECT * FROM department`;
//     db.query(sql, (err, rows) => {
//         if(err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

//Add a department
router.post('department', (req, res) => {
    const sql = `INSERT INTO`
})