import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 8080;
const app = express();
console.log(process.env.DATABASE_URL);
app.listen(PORT, () => {
    console.log('Server is running', PORT);
});
