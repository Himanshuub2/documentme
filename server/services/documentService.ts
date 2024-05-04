import { Request, Response } from "express";
import getScreenShots from "./screenshotService";
import { imagetoText } from "./imagetoText";


export const documentService = async (req:Request,res:Response) => {
    const {url,endpoints} = req.body;
    const imageArray = await getScreenShots(url,endpoints);
    const prompt = 'write simple document from above image its written in react'

    const response = await imagetoText(prompt , imageArray[0]);

    res.status(200).json({message:"successfull",images:imageArray})
}
