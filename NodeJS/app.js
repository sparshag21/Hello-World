const express = require('express');

var app = express();

//Root Route
app.get("/",(req,res)=>{
	res.send("<h1>Hello-World</h1>\n<h3>Hacktober fest 2k19</h3>\n<a href='/hacktober' >Register For Hacktober Fest 2k19</a>");
});
//Sign In for Hacktober Fest 2k19
app.get('/hacktober',(req,res)=>{
    res.send("<a href='https://hacktoberfest.digitalocean.com/' ><b>Click Here To visit Hacktober Fest 2k19 Contest.</b></a>");
});
//TO START EXPRESS APP
app.listen(3000,()=>{
	console.log(`Hacktober fest 2k19 server is started in port 3000`);
});
