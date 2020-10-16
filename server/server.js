const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log("MySQL connected....")
})


app.post('/email', (req, res) => {
    const email = req.body.email

    const sqlInsert = "INSERT INTO Email(email) VALUES (?)"
    db.query(sqlInsert, [email], (err, result) => {
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