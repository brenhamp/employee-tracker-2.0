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

async function viewRoles() {
  console.log("Roles viewed");
}

async function viewEmps() {
  console.log("Emps viewed");
}

async function showMenu() {
  return inquirer.prompt([
    {
      type: "list",
      name: "action",
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
    switch (prompt.action) {
      case "viewDepts": {
        await viewDepts();
        break;
      }
      case "viewRoles": {
          await viewRoles();
          break;
      }
      case "viewEmps": {
          await viewEmps();
          break;
      }
      case "addDept": {
          await addDept();
          break;
      }
      case "addRole": {
          await addRole();
          break;
      }
      case "addEmp": {
          await addEmp();
          break;
      }
      case "quit": {
          exit = true;
          process.exit(0);
      }

      default: console.log(`Unknown action ${prompt.action}`)
    }
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
