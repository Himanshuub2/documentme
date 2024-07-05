import bcrypt from 'bcrypt'
import axios from 'axios';
import { NextApiRequest,NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    if(req.method==='POST'){
        const {username,password} = req.body;
        try{
            const response = await axios.post(`${process.env.SERVER_URL}/v1/auth/login`,{username,password});
            return res.status(200).json(response.data)        

        }
        catch(err){
            console.log(err);
            return res.status(500).json({message:"failed",error:err})
        }
    }
} 