import express from 'express'
import generateRotuer from './generateRoute';
import authRoute from './authRoute';

const router = express.Router();

router.use("/v1/generate",generateRotuer)
router.use('/v1/auth',authRoute);


export default router;