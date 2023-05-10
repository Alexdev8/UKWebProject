const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let mysql = require('mysql');

require('dotenv').config({path: path.dirname(__dirname) + "/.env"});
const db_config = require('./config/db_config');
const app = express();

let connectionPool = mysql.createPool(db_config);
connectionPool.getConnection(function(err, connection) {
    if (err) {
        return console.error('Database connect error: ' + err.message);
    }

    console.log('Connected to the database server');

    let sql = "SELECT * FROM Tickets";
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log(results);
    });
    connection.release();
});

//parses request body and populates request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Where to serve static content
app.use(express.static(path.join(__dirname, "..", process.env.BUILD_PATH)));

app.get('/*', (req, res) => {
        try {
            res.sendFile(path.join(__dirname, '..', process.env.BUILD_PATH, 'index.html'));
        }
        catch (error) {
            console.log(error);
        }
});

app.listen(process.env.PORT || process.env.SERVER_PORT, () => {
    console.log("===============================================");
    console.log("Application is started and listening on port " + process.env.SERVER_PORT);
    console.log("Access the server on: http://localhost:" + process.env.SERVER_PORT);
});