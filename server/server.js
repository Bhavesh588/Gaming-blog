const express = require('express');
const mysql = require('mysql');

// Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '<database_name>'
});

// Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySQL connected....")
})

const app = express();

app.get('/', (req, res) => {
    const sqlInsert = "<first_insert>"
    db.query(sqlInsert, (err, result) => {
        if(err) {
            console.log("There is an error in Insert query")
            console.log(err)
        } else {
            res.send("Record Inserted")
        }
    })
})

app.listen('5000', () => {
    console.log('Server started on port 5000')
});