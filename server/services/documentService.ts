import { Request, Response } from "express";
import getScreenShots from "../utils/screenshotService";
import { imagetoText } from "../utils/imagetoText";


export const documentService = async (req:Request,res:Response) => {
    const {url,endpoints} = req.body;
    const imageArray = await getScreenShots(url,endpoints);
    const prompt = 'write simple document from above image its written in react'

    const imageText = await imagetoText(prompt , imageArray);
    console.log(imageText.choices[0].message)
    res.status(200).json({message:"successfull",images:imageArray})
}
