import express from 'express'
import generateRotuer from './generate';

const router = express.Router();

router.use("/v1/generate",generateRotuer)

export default router;