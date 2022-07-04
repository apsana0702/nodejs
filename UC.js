var http = require('http');
var uc = require('upper-case');
http.createServer((req,res)=>{
res.write(uc.upperCase('hellooo!!!!!!'));
res.end();
}).listen(8080);