Oak Chat was a chat application built with Node.js and Socket.io. It used encrypted messages and real-time updates. This was an experiment with messaging and privacy, not an independently audited secure messenger.

```javascript
// Server-side code using Node.js and Socket.io
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for incoming messages
  socket.on('message', (data) => {
    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

![Screenshot](assets/posts/2016-04-16-oak-chat/1.webp "Screenshot")

![Screenshot](assets/posts/2016-04-16-oak-chat/2.webp "Screenshot")

![Screenshot](assets/posts/2016-04-16-oak-chat/3.webp "Screenshot")

![Screenshot](assets/posts/2016-04-16-oak-chat/4.webp "Screenshot")
