//express 모듈 셋팅
const express = require('express')
const app = express()

app.listen(3000)

let youtuber1 = {
    channelTitle : "ㅇㅇㅇ",
    subscribeNumber : "5.93M",
    videoNum : "1k"
}

let youtuber2 = {
    channelTitle : "ㅁㅁㅁ",
    subscribeNumber : "2.27M",
    videoNum : "6.6k"
}

let youtuber3 = {
    channelTitle : "ㄱㄱㄱ",
    subscribeNumber : "548k",
    videoNum : "726"
}

let db = new Map()
let id = 0
db.set(++id, youtuber1)
db.set(++id, youtuber2)
db.set(++id, youtuber3)
//id 값을 변수로 지정, 0부터 시작해 등록할때마다 전위증가 시켜서 1,2,3...순서대로 등록

app.use(express.json())
app.post('/youtubers', function (req, res) {  
    db.set(++id, req.body)
    res.json({
        message :`${req.body.channelTitle}님 유튜버 생활을 시작해보세요~!`
    }) // post 받은 body값의 channelTitle을 그대로 출력
})


// app.get('/youtubers', function (req, res){
    
//     res.json(db)
// })

//REST API
app.get('/youtubers/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    const youtuber = db.get(id)
    if (youtuber == undefined) { 
        res.json({
            message : "없는 유저입니다."
        })
    }else{
    res.json(youtuber)
    }
})
