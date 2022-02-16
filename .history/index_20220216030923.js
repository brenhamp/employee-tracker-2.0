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
  console.log(`${deptName} department added.`)
};

//Add new role
async function addRole(newRoleInfo) {
   title = newRoleInfo.title;
   salary = newRoleInfo.salary;
   deptID = await getDeptID(newRoleInfo.deptName);
   query = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)';
   args = [title, salary, deptID];
   await db.query(query, args);
   console.log(`${title} role added.`)
}

//Add new employee
async function addEmp(newEmpInfo) {
  roleID = await getRoleID(newEmpInfo.role);
  managerID = await getEmpID(newEmpInfo.manager);
  query = 'INSERT INTO employee (first_name, last_name, role_id, employee_id) VALUES (?,?,?,?)';
  args = [newEmpInfo.first_name, newEmpInfo.last_name, roleID, managerID];
  await db.query(query, args);
  console.log(`${newEmpInfo.first_name} ${newEmpInfo.last_name} added to the database.`)
}

async function updateEmp() {
  console.log("Employee updated");
}

//get department ID
async function getDeptID(deptName) {
  query = "SELECT * FROM department WHERE department.name=?";
  let args = [deptName];
  const rows = await db.query(query, args);
  return rows[0].id;
}

//get role ID
async function getRoleID(roleTitle) {
  query = "SELECT * FROM role WHERE role.title=?";
  let args = [roleTitle];
  const rows = await db.query(query, args);
  return rows.id;
}

//get list of managers
async function getManagers() {
  
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

//Ask for new role information
async function newRoleInfo() {
  const depts = await viewDepts();
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the new role?"
    },

    {
      type: "input",
      name: "salary",
      message: "What is the annual salary of this role?"
    },

    {
      type: "list",
      name: "deptName",
      message: "Which department does this role belong to?",
      choices: [...depts ]

    }
  ])
}

//Ask for new employee information
async function newEmpInfo() {
  const managers = await getManagers();
  const roles = await viewRoles();
  return inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What is your new employee's first name?"
    },

    {
      type: "input",
      name: "lastName",
      message: "What is their last name?"
    },

    {
      type: "list",
      name: "roleTitle",
      message: "What is this employee's role?",
      choices: [...roles]
    },

    {
      type: "list",
      name: "manager",
      message: "Who is their manager?",
      choices: [...managers]
    }
  ])
}

//Main function calls the menu and handles user's choice
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
          const newRole = await newRoleInfo();
          await addRole(newRole);
          break;
      }
      case "addEmp": {
          const newEmp = await newEmpInfo();
          await addEmp(newEmp);
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
