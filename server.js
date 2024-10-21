// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  },
});

// Basic route for testing
app.get('/', (req, res) => {
  res.send('WebRTC Signaling Server is Running');
});

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log(`A user connected: ${socket.id}`);

  // Listen for signal messages
  socket.on('signal', (data) => {
    console.log(`Received signal from ${socket.id} to ${data.peerId}`);
    io.to(data.peerId).emit('signal', data.signal);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start the server
server.listen(5000, () => {
  console.log('Signaling server running on port 5000');
});
