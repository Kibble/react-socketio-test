'use strict';

const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/build/index.html';

// const app = express(); // create express app

// // add middleware
// app.use(express.static("public"));

// // start express server on port 5000
// app.listen(5000, () => {
//   console.log("server started on port 5000");
// });

const app = express()
    .use(express.static('build'))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(app);

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
//   });

// const server = express()
// //   .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//   .use((req, res) => res.sendFile(path.join(__dirname, "public", 'index.html')))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

// const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

io.on('event', (socket) => {
    console.log('asdfasdfasdf');
});

io.on('action', (socket) => {
    console.log('fdasfdas');
})

io.on('test message', (data) => {
    console.log('test message');
    io.in(12345).emit('test message', 'test');
})

// socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
//     console.log(NEW_CHAT_MESSAGE_EVENT + ': ');
//     console.log(data);  
//     io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
//   });

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
