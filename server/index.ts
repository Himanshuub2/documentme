import express, { Application } from 'express'
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 8080;
const app:Application = express();

app.listen(PORT , ()=>{
    console.log('Server is running',PORT)
})