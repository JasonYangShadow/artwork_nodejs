const express = require('express');
const app = express();
var path = require('path');
var cors = require('cors');
app.use(cors())
app.use(express.static('js'))
app.use(express.static('image'))

app.get('/dr', function(req, res){
    res.sendFile(path.join(__dirname, './html/dr.html'))
});

app.listen(8080);