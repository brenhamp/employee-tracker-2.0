const express = require('express');
const inquirer = require('inquirer');
const router = express.Router();



//View all departments

const showMenu = async () => {
    const options = [
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all departments",
                    value: "viewDepts"
                },
                {
                    name: "View roles"
                }
                {
                    name: "Add a new department",
                    value: "addDept"
                },

            ]
        }
    ]

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
