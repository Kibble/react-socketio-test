'use strict';

const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
// const INDEX = '/build/index.html';
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

const app = express()
    .use(express.static('build'))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(app);

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
        console.log('received');
        console.log(data);
        socket.emit('newChatMessage', 'it worked');
    })
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
