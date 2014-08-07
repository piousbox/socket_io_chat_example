#!/usr/bin/env node

'use strict';

/**
 * blah blah
 **/

var app = require('express')();
var http = require('http').Server(app);

var config = { port: 3001 };

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(config.port, function(){
  console.log('listening on *:' + config.port);
});
