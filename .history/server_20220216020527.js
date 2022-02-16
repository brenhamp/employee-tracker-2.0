const db = require('./db/connection');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
let index = require ('./index');

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(inquirer);
// db.query(`SELECT * FROM employee`, (err, rows) => {
//     console.log(rows);
// });

// app.get('/', (req, res) => {
//     res.json({
//         message: 'Test message'
//     });
// });

// app.use((req, res) => {
//     res.status(404).end();
// });

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    index();
  });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });