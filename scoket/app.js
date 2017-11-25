var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    // res.send('ok');
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg)
        console.log('message' + msg)
    })
})
http.listen(3000, function() {
    console.log('this run in 3000')
})