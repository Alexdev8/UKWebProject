const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let mysql = require('mysql');
let moment = require('moment');

require('dotenv').config({path: path.dirname(__dirname) + "/.env"});
const db_config = require('./config/db_config');
const app = express();

let connection = mysql.createConnection(db_config);

connection.connect((err) => {
    console.log('Connection done');
});

connection.on('error', function onError(err) {
    console.log('db error', err);
    throw err;
});

function refreshConnection() {
    if(connection.state !== "authenticated") {
        console.log("Refreshing connection");
        connection = mysql.createConnection(db_config);
        connection.connect((err) => {
            console.log('Connection done');
        });
    }
}

function format(date) {
    let tdate = moment(date);
    return tdate.format("YYYY-MM-DD");
}

function generateRef() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let refLength = 6; //62 characters used for a 6 chars long ref is enough and bring theoretically 56.8B possibilities
    let result = '';
    for (let i = 0; i < refLength; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    //TODO tester que la ref n'existe pas déjà
    return result;
}

//parses request body and populates request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Where to serve static content
app.use(express.static(path.join(__dirname, "..", process.env.BUILD_PATH)));

app.get('/api/tickets/:id', (req, res) => {
    //get ticket information by ref

    const sql="SELECT * FROM Tickets WHERE ticketRef= ?";

    refreshConnection();
    connection.query(sql, [req.params.id],(err, results, fields) => {
        if (!err) {
            res.send(results[0]);
            console.log('Result sent');
        }
        else {
            res.send('error during query: ' + err.message);
            return console.error('error during query: ' + err.message);
        }
    });
});

app.post('/api/tickets', (req, res) => {
    //add a json type ticket object to the database

    let ticket = req.body;
    const sql="INSERT INTO Tickets (`ticketRef`, `ticketValidityStartDate`, `ticketValidityEndDate`, `ticketType`, `visitorFirstName`, `visitorLastName`, `accountID`, `email`) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    console.log(ticket);
    refreshConnection();
    connection.query(sql, [generateRef(), ticket.ticketStartDate, ticket.ticketEndDate, ticket.ticketType, "test", "testNom", null, ticket.email],(err, results, fields) => {
        if (!err) {
            res.send(results);
            console.log('Result sent');
        }
        else {
            res.send('error during query: ' + err.message);
            return console.error('error during query: ' + err.message);
        }
    });
});

app.get('/api/account', (req, res) => {
    //get account information by email

    const sql="SELECT * FROM Accounts WHERE email= ?";

    refreshConnection();
    connection.query(sql, [req.query.email],(err, results, fields) => {
        if (!err) {
            res.send(results[0]);
            console.log('Result sent');
        }
        else {
            res.send('error during query: ' + err.message);
            return console.error('error during query: ' + err.message);
        }
    });
});

app.post('/api/account', (req, res) => {
    //add a json type account object to the database

    let account = req.body;
    const sql="INSERT INTO `Accounts`(`firstName`, `lastName`, `birthDate`, `email`, `password`, `phoneNumber`, `newsLetterSubscription`) " +
        "VALUES (?, ?, ?, ?, ?, ?, ?)";

    console.log(account);
    refreshConnection();
    connection.query(sql, [account.firstName, account.lastName, account.birthDate, account.email, account.password, account.phoneNumber, account.newsLetter],(err, results, fields) => {
        if (!err) {
            res.send(results);
            console.log('Result sent');
        }
        else {
            res.send('error during query: ' + err.message);
            return console.error('error during query: ' + err.message);
        }
    });
});

app.get('/api/*', (req, res) => {
    res.send("Rose crown amusement park API endpoint\nStatus: " + connection.state);
});

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