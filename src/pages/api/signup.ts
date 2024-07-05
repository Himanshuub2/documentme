import bcrypt from 'bcrypt'
import axios from 'axios';
import { NextApiRequest,NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==='POST'){
        const {username,fullname,email,password} = req.body;
        const SALT = 10;
        const hashedPass = await bcrypt.hash(password,SALT);
        const response = await axios.post(`${process.env.SERVER_URL}/v1/auth/signup`,{username,fullname,email,hashedPass});
        return res.status(200).json(response.data)
        
    }
} 