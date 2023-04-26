const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

require('dotenv').config({path: path.dirname(__dirname) + "/.env"});

const app = express();
app.listen(process.env.SERVER_PORT, () => {
    console.log("===============================================");
    console.log("Application is started and listening on port " + process.env.SERVER_PORT);
    console.log("Access the server on: http://localhost:" + process.env.SERVER_PORT);
});

//parses request body and populates request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Where to serve static content
app.use(express.static(path.join(__dirname, "..", process.env.BUILD_PATH)));
app.use(express.static(path.join(__dirname, "..", process.env.BUILD_PATH, "static/")));

// app.get('/', (req, res) => {
//         try {
//             fs.readFile(path.dirname(__dirname) + process.env.BUILD_PATH + "index.html", function(err, data) {
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.write(data);
//                 res.end();
//             });
//         }
//         catch (error) {
//             error404(req, res);
//             console.log(error);
//         }
// });


// Last route: page not found -> Error 404
app.use(function (req, res, next) {
    error404(req, res);
})

function error404(req, res) {
    res.status(404);

    if (req.accepts('html')) {
        res.write("<h1>Looks like the page you are looking for does not exist :(</h1>");
        res.end();
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.json({ status: 404, message: 'Not found'});
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
}