const express = require("express")
const app = express()
const http = require("http").createServer(app)
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/dist'))
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Credentials", "true"); 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  // res.send(`<h1>Hello World!!!</h1>`)
  res.send(__dirname + '/dist/index.html')
})

const userList = {};
let userCount = 0;
const messageList = []

io.on("connection", socket => {

  socket.on("login", data => {
    console.log(`${data.username} 登录`);
    socket.uid = data.uid
    userList[data.uid] = data.username
    userCount++

    io.emit('users', {
      userCount,
      userList
    })

    // 发给自己
    socket.emit("receive_message", messageList)
  })

  socket.on("disconnect", function() {
    if( !socket.uid ) return
    const user = {
      uid: socket.uid,
      username: userList[socket.uid]
    }
    delete userList[socket.uid]
    userCount--
    // 发送给所有用户 使用 io.emit  
    // 发送给自己 使用 socket.emit
    io.emit('users', {
      userCount,
      userList
    })
    console.log(`${user.username} 登出了`);
  })

    
  socket.on("message", data => {
    if ( !data ) return
    // console.log(`发送信息 -- ${data}`);
    messageList.push({
      username: userList[socket.uid],
      message: data
    })
    if( messageList.length > 30 ){
      messageList.shift()
    }
    // 发送给除了自己以为的其他所有用户
    // socket.broadcast.emit("receive_message", messageList)
    io.emit("receive_message", messageList)
  })
})

http.listen(2000, _ => {
  console.log('This server is running: http://localhost:2000');
})