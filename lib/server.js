var connect = require('connect');
var ecstatic = require('ecstatic');
var app = connect();


app.use(ecstatic(__dirname + '/../public'));
var port = process.env.PORT || process.env.JARPORT || 5000;
app.listen(port);
console.log("Listening on port " + port);
