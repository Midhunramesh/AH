var express = require('express');
var socket = require ('socket.io');
var app = express();
const exec = require('child_process').exec;

                                                  //setting server with port 4000
var server = app.listen(4000,function(){
	console.log("server initiated...");
});

                                                   //accessing files from public directory
app.use(express.static('Public'));


                                                   //initializing socket connection 
var io= socket(server);
io.on('connection',function(socket){
	console.log('first successful connection!');

	                                              
	socket.on('child',function(){                  //listening to event "child"      
    
    exec('test.bat', (err, stdout, stderr) => {    // Child process which executes Bat file 
  if (err) {  
    console.error(err);  
    return;  
  }  
  console.log(stdout);  

});  

});

});


  
