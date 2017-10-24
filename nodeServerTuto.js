var http = require('http');
var fs= require('fs');

var myreadStream = fs.createReadStream(__dirname + '/text/textSample.txt', 'utf8');
var mywriteStream = fs.create



myreadStream.on('data',function(chunk){
  console.log('ne chunk received');
  console.log(chunk);
});


/*
var server = http.createServer(function(req, res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Hey ninjas');


});

server.listen(3000, '127.0.0.1');
console.log('NOW listening to port 3000');


*/
