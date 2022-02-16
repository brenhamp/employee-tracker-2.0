const app = expressr;
const express = require('express');
const router = express.Router();

app.use(require('./inquirer/inquirer'));

module.exports = router;