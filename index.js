import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
dotenv.config();


import connectDB from './config/db.js';
import router from './routers/posts.js';

 
    const port= process.env.PORT || 5000
    
connectDB()

const app = express()
app.use(cors())
//accepting body data
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))

app.use('/post', router)

app.use(express.static(path.join(__dirname, "/client")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`))

//serve frontend
