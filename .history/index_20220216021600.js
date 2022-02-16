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
  query = "SELECT * FROM department";
  departments = await db.query(query);
  console.table(departments);
  return departments;
}

//View all roles
async function viewRoles() {
  query = "SELECT * FROM role";
  roles = await db.query(query);
  console.table(roles);
  return roles;
}

//View all employees
async function viewEmps() {
  query = "SELECT * FROM employee";
  employees = await db.query(query);
  console.table(employees);
  return employees;
}



//Add new department
async function addDept(newDeptInfo) {
  deptName = newDeptInfo.deptName;
  query = "INSERT INTO department (name) VALUES (?)";
  let args = [deptName];
  await db.query(query, args);
}

async function addRole() {
  console.log("Role added");
}

async function addEmp() {
  console.log("Employee added");
}

async function updateEmp() {
  console.log("Employee updated");
}


//Main menu
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

//Ask for new department name
async function newDeptInfo() {
  return inquirer.prompt([
    {
      type: "input",
      name: "deptName",
      message: "What is the name of the new department?"
    }
  ])
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
          const newDept = await newDeptInfo();
          await addDept(newDept);
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
      case "updateEmp": {
        await updateEmp();
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
