const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


app.get('/', (req, res)=>{
    res.json({
        message: 'Welcome to my api'
    })
})

app.get('/projects', (req, res)=>{
    res.json({
        'link': ['/proects/channel', '/projects/me']
    })
})
app.get("/projects/channel", (req, res)=>{
    res.redirect('https://www.youtube.com/@bashacoder')
})
app.get('/projects/me', (req, res)=>{
    res.sendFile("/home/adam/Desktop/nodejsapi/me.txt")
})



app.listen(3000, ()=>{
    console.log('Server is up on localhost:3000')
})