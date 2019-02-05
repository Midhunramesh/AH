var socket = io.connect();

var btn = document.getElementById('send');
btn.addEventListener('click',function () {
	socket.emit('child');
});