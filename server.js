import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
import connectiondb from './config/connection.js'
dotenv.config()

let app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(logger('dev'))

let port = process.env.PORT;
connectiondb()

app.listen(port, ()=> {
    console.log("Server Started");
    
})
