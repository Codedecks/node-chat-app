const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  // socket.emit('newEmail', {
  //   from: 'mike@mail.com',
  //   text: 'What up?',
  //   createdAt: 123
  // });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });

  socket.on('createMessage', (message) => {
    console.log('create message', message);
  });

  socket.emit('newMessage', {
    from: 'Brad',
    text: 'HelloOOoOooO there....',
    createdAt: 123
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
