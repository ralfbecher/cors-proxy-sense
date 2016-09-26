var config = require('./config.json');
var fs = require('fs');
var path = require("path");
var http = require('http');
var https = require('https');
var express = require('express');
var request = require('request');

var httpsOptions = {
    ca: [fs.readFileSync(path.resolve(config.certificateRoot, "root.pem"))],
    key: fs.readFileSync(path.resolve(config.certificateRoot, "server_key.pem")),
    cert: fs.readFileSync(path.resolve(config.certificateRoot, "server.pem")),
    rejectUnauthorized: false
};

var app = express();
app.use('/proxy', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var url = req.url.replace('/?url=', '');
    req.pipe(request(url)).pipe(res);
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(httpsOptions, app);

httpServer.listen(config.httpPort);
httpsServer.listen(config.httpsPort);

console.log("HTTP server listening on port " + config.httpPort);
console.log("HTTPS server listening on port " + config.httpsPort);