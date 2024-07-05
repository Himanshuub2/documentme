import { Request, Response } from "express";
import getScreenShots from "../utils/screenshotService";
import { imagetoText } from "../utils/imagetoText";
import db from "../utils/db";


export const documentService = async (req:Request,res:Response) => {
    const {url,endpoints,prompt,username} = req.body;
    const imageArray = await getScreenShots(url,endpoints);
    const userPrompt = prompt?prompt:'write simple document from above image its written in react';

    const imageText = await imagetoText(userPrompt , imageArray);

    const user = await db.user.findUnique({
        where:{
            username:username
        }
    })

    if(!user) res.status(400).json({message:"User does not exist"});

    const createResource = await db.resource.create({
        data:{
            user_id:user.id,
            base_url:url,
            endpoints:endpoints,
            prompt:userPrompt
        }
    })

    res.status(200).json({message:"successfull prompt saved"})
}
