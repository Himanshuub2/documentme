import express, { Application } from 'express'
import dotenv from 'dotenv'
import router from './routes';
import cookieParser from 'cookie-parser'

dotenv.config();

const PORT = process.env.PORT || 8080;
const app:Application = express();
app.use(express.json())
app.use(cookieParser());
app.use('/',router);

app.listen(PORT , ()=>{
    console.log('Server is running',PORT)
})