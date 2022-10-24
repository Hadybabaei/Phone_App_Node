const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const {dbcon} = require('./utils/db');
const router = require('./routes');
const port = config.get('port')

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port,()=>{
    console.log(`app is runing on port ${port}`)
    dbcon()
    app.use('/',router)
})
