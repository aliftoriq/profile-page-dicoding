const express = require('express')
const path = require('path');

const PORT = 8000
const HOST = 'localhost'

const app = express()
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/css/app.css', (req, res) => {
    res.sendFile(path.join(__dirname+'/css/app.css'));
  });

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)