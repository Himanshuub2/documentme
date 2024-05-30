import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import db from '../utils/db';
import { ref } from 'pdfkit';


class AuthUser{
    constructor(){
        this.signup = this.signup.bind(this);
        this.setTokenInCookie = this.setTokenInCookie.bind(this);
    }   

    setTokenInCookie(accessToken:string,refreshToken:string,res:Response){

        res.cookie('accesstoken',accessToken,{httpOnly:true,maxAge:30,path:'/'})
        res.cookie('refreshtoken',refreshToken,{httpOnly:true,maxAge:30,path:'/'})
        return res;
    }

    createToken(user:{username:string,email:string}){

        const accessToken = jwt.sign(user, process.env.JWT_SECRET as Secret, {expiresIn:'1h'} )
        const refreshToken  = jwt.sign(user, process.env.JWT_SECRET as Secret, {expiresIn:'3h'} )
        return {accessToken,refreshToken}
    }

    validateToken(req:Request,res:Response,next:NextFunction){
        const authHeader = req.headers.authorization;
        const token = req.cookies.accesstoken;

        if(!token) res.status(401).json({message:"Invalid Token"})

        const isValid = jwt.verify(token,process.env.JWT_SECRET as Secret)
        if(isValid){
             next();
        }

        res.status(401).json({message:"unauthorized User"})
    }

    async login(req:Request,res:Response){
        const {username,pass} = req.body    //username , email , password (hashed)

        const isUsername  = await db.user.findFirst({
            where:{
                username:username,
                hashed_password:pass,
            }
        })
        if(!isUsername) res.status(401).json({message:"Invalid username or password"});

        const {accessToken,refreshToken}  = this.createToken(username);
        const resp = this.setTokenInCookie(accessToken,refreshToken,res);

        resp.status(200).json({message:"User logged in successfully",username})
    }

    async signup(req:Request,res:Response){
        const {username,email,pass,fullname} = req.body;
        console.log(username,email,pass);
        
        const isUsername  = await db.user.findFirst({
            where:{
                username:username
            }
        })
        const hashedPassword = pass;
        if(isUsername) res.status(401).json({message:"user already exists"})

        const saveUser = await db.user.create({
            data:{
                username,
                email,
                full_name:fullname,
                hashed_password:hashedPassword
            }
        })

        const {accessToken,refreshToken} = this.createToken({username,email})
        const resp = this.setTokenInCookie(accessToken,refreshToken,res);

        resp.status(200).json({message:"user Created Successfully",username})
        

    }

 

}

const authService = new AuthUser();
export default authService;