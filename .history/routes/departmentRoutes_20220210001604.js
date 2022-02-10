const inquirer = require('inquirer');

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
                    name: "View all roles",
                    value: "viewRoles"
                },
                {
                    name: "View all employees",
                    value: "viewEmps"
                },
                {
                    name: "Add a new department",
                    value: "addDept"
                },
                {
                    name: "Add a new role",
                    value: "addRole"
                },
                {
                    name: "Add a new employee",
                    value: "addEmp"
                },
                {
                    name: "Update an employee's role",
                    value: "updateEmp"
                },
                {
                    name: "Exit the database",
                    value: "quit"
                }

            ]
        }
    ];
    return inquirer.prompt(options);
};

const main = async () => {
    for (let i = 0; i < 1; i++) {
        showMenu()
        .then(answers => {
            
        })
    }
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
