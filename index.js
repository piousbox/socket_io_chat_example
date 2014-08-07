#!/usr/bin/env node

'use strict';

/**
 * Practicing building stuff with Socket.io
 * Author: piousbox
 * No copyright. 2014
 *
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var config = { port: 3001 };

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('chat message', function(msg){
	console.log('message: ' + msg);
    });

    socket.on('disconnect', function(){
	console.log('user disconnected');
    });
});

http.listen(config.port, function(){
  console.log('listening on *:' + config.port);
});




