const mysql = require('mysql2');

class database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, result) => {
                if (err) {
                    console.log(err.sql);
                    console.log("");
                    return reject(err);
                }
                resolve(result);
            })
        })
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) {
                    c
                }
            })
        })
    }
}