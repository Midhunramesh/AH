var express = require('express');
var socket = require ('socket.io');
var app = express();
const exec = require('child_process').exec;

var server = app.listen(4000,function(){
	console.log("server initiated...");
});

app.use(express.static('Public'));

var io= socket(server);
io.on('connection',function(socket){
	console.log('first successful connection!');
	
	socket.on('child',function(){
       exec('test.bat', (err, stdout, stderr) => {  
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  
});  

});

});


  
