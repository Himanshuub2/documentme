import express from 'express'
import {documentService} from '../services/documentService';

const generateRotue = express.Router();

generateRotue.post("/",documentService as any)

export default generateRotue;