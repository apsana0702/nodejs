var url = require('url');
var adrs = 'http://localhost:8082/home.html?year=2018&&month=feb'
var q = url.parse(adrs,true);
console.log(q.search);