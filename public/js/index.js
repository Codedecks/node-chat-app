var socket = io();

socket.on('connect', function() {
  console.log('connected to server');

  // socket.emit('createEmail', {
  //   to: 'jane@mail.com',
  //   text: 'Hi Jane this is Brandon'
  // });

  // socket.emit('createMessage', {
  //   from: 'jane',
  //   text: 'Hi Jane this is Brandon'
  // });
});

socket.on('disconnect', function() {
  console.log('disconnected from server');
});

// socket.on('newEmail', function(email) {
//   console.log('new email', email);
// });

socket.on('newMessage', function(message) {
  console.log('new message', message);
  var li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  $('#messages').append(li);
});

// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'Hi'
// }, function(data) {
//   console.log('Got it', data);
// });


$('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function () {

  });
});
