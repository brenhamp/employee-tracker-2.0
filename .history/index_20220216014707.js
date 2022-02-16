const inquirer = require("inquirer");
const db = require("./db/connection.js");
const Database = require ("./db/connection.js");

const createDatabase = new Database

//View all departments
async function viewDepts() {
  console.log("departments viewed");
}

main();

function main() {
    showMenu();
    console.log("function passed");
    // .then(answers => {
    //     if (answers.action === 'viewDepts') {
    //         const sql = `SELECT * FROM department`;
    //         db.query(sql, (err, rows) => {
    //             if(err) {
    //                 res.status(500).json({ error: err.message });
    //                 return;
    //             }
    //             res.json({
    //                 message: 'success',
    //                 data: rows
    //             });
    //         });
    //     }
    // })
    // }
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
  switch (choice.value) {
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
  }
}

process.on("exit", async function (code) {
  await db.close();
  return console.log(`Exiting with code ${code}`);
});


  


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
