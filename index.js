import express from 'express'
import dotenv from "dotenv"
dotenv.config();


import connectDB from './config/db.js';
import router from './routers/posts.js';

 
    const port= process.env.PORT || 5000
    
connectDB()

const app = express()

//accepting body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/post', router)
app.listen(port, () => console.log(`Listening on port ${port}`))
