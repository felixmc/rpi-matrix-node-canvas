'use strict';

var WIDTH = 32;
var PORT  = 3000;

var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var io      = require('socket.io')(server);

var LedMatrix = require('node-rpi-rgb-led-matrix');
var matrix    = new LedMatrix(WIDTH);

var Color = require('onecolor');


app.use(express.static('public'));

io.on('connection', function(socket) {
	
  socket.on('draw', function(data) {
    var x = data.index % WIDTH;
    var y = Math.floor(data.index / WIDTH);
    var color = Color(data.color);

    matrix.setPixel(x, y, color.red() * 255, color.green() * 255, color.blue() * 255);
    
    // my LED matrix is setup at 90deg CCW, so I have to do some math magic on the coordinates so things work properly
    // matrix.setPixel(WIDTH - y, x, color.red() * 255, color.green() * 255, color.blue() * 255);

    console.log('draw data:', data);
  });

  socket.on('clear', function() {
    matrix.fill(0, 0, 0);
  });

});

server.listen(PORT, function() {
  console.log('listening on *:' + PORT);
});
