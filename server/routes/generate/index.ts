import express from 'express'
import {documentService} from '../../services/documentService';

const generateRotuer = express.Router();

generateRotuer.post("/",documentService as any)

export default generateRotuer;