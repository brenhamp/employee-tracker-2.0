const inquirer = require("inquirer");
const Database = require ("./db/db.js");

const db = new Database({
  host: 'localhost',
  user: 'root',
  password: '5x)Q>3K=hfuVJ3_}',
  database: 'employee_db'
});

//View all departments
async function viewDepts() {
  console.log("departments viewed");
  query = "SELECT name FROM department";
  rows = db.query(query);
  deptNames = [];
  for (const row of rows) {
    deptNames.push(row.name);
  }
  return deptNames;
}




async function showMenu() {
  const { choice } = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all departments",
          value: "viewDepts",
        },
        {
          name: "View all roles",
          value: "viewRoles",
        },
        {
          name: "View all employees",
          value: "viewEmps",
        },
        {
          name: "Add a new department",
          value: "addDept",
        },
        {
          name: "Add a new role",
          value: "addRole",
        },
        {
          name: "Add a new employee",
          value: "addEmp",
        },
        {
          name: "Update an employee's role",
          value: "updateEmp",
        },
        {
          name: "Exit the database",
          value: "quit",
        },
      ],
    },
  ]);
}


async function main() {
  let exit = false;
  while (!exit) {
    const prompt = await showMenu();
  }

}

process.on("exit", async function (code) {
  await db.close();
  return console.log(`Exiting with code ${code}`);
});

main();


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