const express = require('express')
const app = express()
app.listen(8888)

const userRouter = require('./routes/users.js')
const channelRouter = require('./routes/channels.js')

// user-demo를 모듈로 소환해서 미들웨어 역할을 해주었다.
app.use("/", userRouter) 
app.use("/channels", channelRouter) 
