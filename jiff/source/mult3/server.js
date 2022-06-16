var express = require('express');
var app = express();
var http = require('http').Server(app);

var JIFFServer = require('../../lib/jiff-server');
var jiff_instance = new JIFFServer(http, {logs:true});

var jiffBigNumberServer = require('../../lib/ext/jiff-server-bignumber');
jiff_instance.apply_extension(jiffBigNumberServer);

//Serve static files
//Configure App
app.use('/demos', express.static('demos'));
app.use('/lib', express.static('lib'));
app.use('/lib/ext', express.static('lib/ext'));

// Serve static files.
try {
http.listen(8080, function () {
  console.log('listening on *:8080');
});
} catch (err) {
  console.log('ERROR:'+err.message)
}
