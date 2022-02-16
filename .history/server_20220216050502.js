const db = require('./db/connection');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
let index = require ('./index');

db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => {

    });
  });