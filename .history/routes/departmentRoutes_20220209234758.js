const express = require('express');
const router = express.Router();

//View all departments
router.get('department', (req, res) => {
    const sql = `SELECT * FROM department`
})